import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "./index.scss";
import { Specialty } from "./types";

function TopItems() {
  const [specialties, setSpecialties] = useState<Specialty[]>([]);
  useEffect(() => {
    axios
      .get(" https://vezeeta-clone-json-server.herokuapp.com/specialties")
      .then((res) => {
        console.log("🚀 ~ res", res);
        setSpecialties(res.data.slice(0, 10));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h3>PatientLayout</h3>

      <h1>Choose from top offers</h1>
      <Swiper
        style={{ width: "85%", margin: "auto" }}
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        //pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {specialties.map((specialty) => (
          <SwiperSlide key={specialty.id}>
            <img src={specialty.imageUrl} alt={specialty.name} />
            <br />
            <span>{specialty.name}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default TopItems;
