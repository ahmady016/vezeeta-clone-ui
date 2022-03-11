/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useRef, useState } from "react";

const useSlider = ({ hideClass, speed, delay }: any) => {
  // For Images Parent
  const boxRef = useRef<any>();

  // Index For Img
  const [_, setNewIdx] = useState(0);

  const changeIdx = useCallback(
    (allImags: any) =>
      setNewIdx((prev) => {
        // Img Target
        const targetImg: any = allImags[prev];

        if (prev <= 0) {
          // Remove hide Class
          allImags.forEach((img: any) => img.classList.remove(hideClass));
          // reset Idx
          return allImags.length - 1;
        } else {
          // add hide Class
          targetImg.classList.add(hideClass);
          // decrement Idx
          return prev - 1;
        }
      }),
    [hideClass]
  );

  // Set "setInterval" on frist Render
  useEffect(() => {
    //
    // Children Of Imgs Box
    const childNodes = boxRef?.current?.childNodes;

    const allImags = Array.from(childNodes).filter((e: any) =>
      e.getAttribute("data-slide")
    );

    // Fitrst Reset Nums
    setNewIdx(allImags.length - 1);

    // !Firs Delay
    const newDelay = speed * 1000 + delay * 1000;

    // for First Img
    new Promise((res) =>
      setTimeout(() => res(changeIdx(allImags)), delay * 1000)
    )
      // Start InterVal [Put New Delay After First Img]
      .then(() => setInterval(() => changeIdx(allImags), newDelay));

    // Put transition in imgs
    allImags.forEach((img: any) => (img.style.transition = `${speed}s`));
  }, [changeIdx, speed, delay]);

  return { boxRef };
};

export default useSlider;
