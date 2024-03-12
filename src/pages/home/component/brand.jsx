import React from 'react'
import { BrendCard } from './brend-card'
import { userbrendcard } from '../serves/query/useGetCategory'

export const Brand = () => {
    const {data} = userbrendcard()
  return (
    <div className='container pt-10 pb-10'>
      <h1 className='font-bold text-2xl pb-4'>Популярные бренды</h1>
        <div className='grid grid-cols-6 gap-5 justify-center'>
        {data?.map((item)=>(
          <BrendCard key={item.id} {...item}/>
        ))}
        </div>
    </div>
  )
}
