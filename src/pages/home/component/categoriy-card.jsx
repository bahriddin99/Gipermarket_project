import React from 'react'
import { Link } from 'react-router-dom'
export const CategoriyCard = ({img,id,name,datakey}) => {
  return (

    <Link to={`/categories/${datakey}`}>
     <div className='w-[220px] h-[124px] bg-footer flex items-center gap-4 p-2 rounded-md'>
        <img className='w-[96px] ' src={img} alt="" />
        <h1 className=''>{name}</h1>
    </div>
    </Link>
    
  )
}
