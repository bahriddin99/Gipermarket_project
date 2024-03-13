import React from "react";

import { userphonecard } from "../serves/query/useGetCategory";
import { PhoneCard } from "./phone-card";
import { SampleNextArrow } from "../../../componets/silader/silider";
import { SamplePrevArrow } from "../../../componets/silader/silider";
import useDebounce from "../../../hook/usedbouse";
import Slider from "react-slick";


const settings = {
  // dots: true,
  infinite: true,
  speed: 18000,
  autoplay: true,
  slidesToShow: 5,
  autoplaySpeed: 1000,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export const Phones = () => {
 const search = useDebounce() 
 const { data } = userphonecard(search)
 console.log(search);
 


  return (
    <div className="container">
      <h1 className="font-bold text-2xl"> Смартфоны и планшеты</h1>

      <div className=" items-start gap-4">
        <Slider {...settings} className="flex">
         {data?.map((item)=>(
          <PhoneCard key={item.id} {...item}/>
         ))}
        </Slider>
      </div>
    </div>
  );
};
