import React from "react";
// import { Phones } from "./component/phones";
import banner2 from "../../imgs-icon/imgs/2.png"
import banner3 from "../../imgs-icon/imgs/3.png"
import banner4 from "../../imgs-icon/imgs/4.png"
import { Categoriy } from "./component/categoriy";
import Slider from "react-slick";
import { SampleNextArrow } from "../../componets/silader/silider";
import { SamplePrevArrow } from "../../componets/silader/silider";
import { Aksiya } from "./component/aksiya";
import { Phones } from "./component/phones";
import { PhoneNoutbook } from "./component/phone-noutbook";
import { Noutbook } from "./component/noutbook";
import { Brand } from "./component/brand";




const settings = {
  dots: true,
  infinite: true,
  speed: 3000,
  autoplay:true,
  slidesToShow: 1,
  autoplaySpeed: 3000,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};



export const Home = () => {
  return (
    <>
      <section className="Banner pb-3">
        <Slider {...settings}>
          <img src={banner2} alt="banner2" />
          <img src={banner3} alt="banne3" />
          <img src={banner4} alt="banner4" />
        </Slider>
      </section>
      <Categoriy />
      <Phones/>
      <Aksiya/>
      <PhoneNoutbook/>
      <Phones/>
      <Noutbook/>
      <Brand/>
      
      
     
    </>
  );
};
