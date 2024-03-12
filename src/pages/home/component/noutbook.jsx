import React from 'react'
import { NoutbookCard } from './noutbook-card'
import { usernoutbookcard } from '../serves/query/useGetCategory';
import { SampleNextArrow } from '../../../componets/silader/silider';
import { SamplePrevArrow } from '../../../componets/silader/silider';
import Slider from 'react-slick';

const settings = {
    // dots: true,
    infinite: true,
    speed: 18000,
    autoplay: true,
    slidesToShow: 5,
    autoplaySpeed: 1000,
    slidesToScroll: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

export const Noutbook = () => {
  const {data} = usernoutbookcard()
  return (
    <div className='container'>
        <h1 className="font-bold text-2xl"> Ноутбуки, планшеты и компьютеры</h1>
         <Slider {...settings}>
         {data?.map((item)=>(
            <NoutbookCard key={item.id} {...item}/>
         ))}
         </Slider>
    </div>
  )
}
