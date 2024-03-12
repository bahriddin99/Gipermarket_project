import React from 'react'
import { request } from '../../../request/request'
import { userbannercard } from '../serves/query/useGetCategory'
import { CategoriyCard } from './categoriy-card'
import { SampleNextArrow } from '../../../componets/silader/silider'
import { SamplePrevArrow } from '../../../componets/silader/silider'
import Slider from 'react-slick';


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

export const Categoriy = () => {
const {data} = userbannercard()
  return (
    <div className='flex container gap-5 items-center pt-5 pb-6'>
       <Slider {...settings}>
        
       </Slider>
       {data?.map((item)=>(
        <CategoriyCard key={item.id} {...item}/>
       ))}
    </div>
  )
  
}
