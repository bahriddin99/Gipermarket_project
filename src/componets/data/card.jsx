import React from 'react'

export const Card = ({img,name,price,discount}) => {
  return (
    <div>
        <img src={img} alt="" />
        <h1>{name}</h1>
        <p>{price}</p>
        <p>{discount}</p>
    </div>
  )
}
