import React from "react";
import { Link } from "react-router-dom";

export const PhoneNoutbookCard = ({ img, name, price, discount,id, datakey }) => {
  return (
    <Link to={`product/${datakey}/${id}`}>
      <div className="flex gap-5 w-[413px]  ">
        
        <img className="w-[140px] h-[140px]" src={img} alt="" />
        <div className="flex flex-col  h-[110px] justify-between pt-4">
          <h1>{name}</h1>
          <div className="flex gap-2 pt-4">
            <p className="font-bold ">{price}$</p>
            <p className="line-through">{discount}$</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
