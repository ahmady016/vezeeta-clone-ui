import React, { useEffect, useState } from "react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import axios from "axios"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss"
import "swiper/scss/navigation"
//import "swiper/scss/pagination"
import "./index.scss"
// import  {type} from './types.ts'

type city = {
  id: string
  name: string
  imageUrl: string
};

function TopICities() {
  const [cities, setCities] = useState<city[]>([])
  useEffect(() => {
    axios
      .get("https://vezeeta-clone-json-server.herokuapp.com/cities")
      .then((res) => {
        console.log("🚀 ~ res", res)
        setCities(res.data.slice(0, 10))
      })
      .catch((err) =>{console.log(err)})
  }, [])

  return (
    <>

      <h1> Top Cities </h1>
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
        {cities.map((city) => (
          <SwiperSlide key={city.id}>
            <img src={city.imageUrl} alt={city.name} /><br/>
            <span>{city.name}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default TopICities;
