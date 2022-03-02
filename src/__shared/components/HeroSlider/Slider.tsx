import React from "react";
import useSlider from "../../hooks/useSlider";
import { Container } from "react-bootstrap";
import img01 from "../../../__images/Slider/01.jpg";
import img02 from "../../../__images/Slider/02.jpg";
import img03 from "../../../__images/Slider/03.jpg";

const imgs = [img01, img02, img03];

const Slider = ({ children }: any) => {
  const { boxRef } = useSlider({
    hideClass: "hide-Photo-Slider",
    speed: 2,
    delay: 5.5,
  });

  return (
    <div ref={boxRef} className="Slider-Section h-auto w-100 position-relative">
      {imgs.map((img, i) => (
        <img
          key={i}
          data-slide="true"
          className="back-index w-100 h-100 position-absolute d-none d-sm-block"
          src={img}
          alt=""
        />
      ))}
      <Container className="HeroSlider-Container pt-1 pt-sm-5 container">
        {children}
      </Container>
    </div>
  );
};

export default Slider;
