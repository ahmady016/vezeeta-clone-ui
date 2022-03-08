import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


function Tops():any {
    const topOffreData:any=[{
        id:1,
        imgUrl:"../cleanigTeeth.png",
        depName:" Cleaning Teeth",
        price:" 100 Egp",
        totalOffer:" 794 Offers"
    },
    {
        id:2,
        imgUrl:"../clean_skin.png",
        depName:"Facial Cleansing",
        price:"81 EGP",
        totalOffer:"494"
    },
    {
        id:3,
        imgUrl:"../teethbraces.png",
        depName:"Metal Braces",
        price:"3200 EGP",
        totalOffer:"43"
    },
    {
        id:4,
        imgUrl:"../peeling.png",
        depName:"Face Peeling",
        price:"100 EGP",
        totalOffer:"400"
    },
    {
        id:5,
        imgUrl:"../weightloss.png",
        depName:"weightloss",
        price:"300 EGP",
        totalOffer:"500"
    },
    {
        id:6,
        imgUrl:"../visioncorrect.png",
        depName:"Vision Correction",
        price:" 5000 EGP",
        totalOffer:"40"
    },
    {
        id:7,
        imgUrl:"../vitamin_D.png",
        depName:"Vitamin D",
        price:" 40EGP",
        totalOffer:"700"
    },
    {
        id:8,
        imgUrl:"../laserhair.png",
        depName:"Laser Hair",
        price:"3000 EGP",
        totalOffer:"100"
    },
]
	return (
        <>
        <h1>Choose from top offers</h1>
        
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
        
        </>
    )
		
}

export default Tops