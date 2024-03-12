import React from "react";
import { Karzinkaa } from "../../../imgs-icon/icons/card";
import { Like } from "../../../imgs-icon/icons/like";
import { Link } from "react-router-dom";

export const NoutbookCard = ({ img, price, discount, name, id,datakey }) => {
  return (
    <div className="pt-3" >
        <div className="w-[214px] h-[323px] gap-3 flex flex-col items-center justify-center  hover:border border-slate-400 text-center  hover:shadow-2xl rounded-md  ">

        <Link to={`product/${datakey}/${id}`}>
          <div className="flex gap-3">
            <img className="w-[165] h-[165px]" src={img} alt="" />
            <div className="pt-4">
              {" "}
              <Like />
            </div>
          </div>
          </Link>
          <div className="flex flex-col  h-[110px] justify-between">
            <h1>{name}</h1>
            <div className="">
              <p className="text-[#999999] line-through">{discount}</p>
              <div className="flex gap-3 items-center self-end text-center justify-center">
                <p className="font-bold">{price}</p>
                <div className="w-[36px] h-[36px]  bg-cyan-400 rounded-md  flex items-center justify-center">
                  {" "}
                  <Karzinkaa />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};
