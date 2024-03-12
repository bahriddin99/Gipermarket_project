import React from "react";
// import { Karzinkaa } from "../../../imgs-icon/icons/card";
import { Like } from "../../../imgs-icon/icons/like";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../../../redux/reducer/product-reducer";
import { Karzinkaa } from "../../../imgs-icon/icons/card";


export const PhoneCard = ({ id, datakey, img, name, price, discount,userCount,userPrice,count }) => {

  const dispatch = useDispatch();

  const addProduct = ()=>{
    dispatch(add( {id, datakey, img, name, price, discount, userCount,userPrice,count  }))
 }

  return (
    <div className="pt-3">
      <div className="w-[214px] h-[323px] gap-3 flex text-center flex-col items-center justify-center hover:border border-slate-400 hover:shadow-2xl rounded-md ">
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
            <div className="flex gap-3 items-center self-end justify-center ">
              <p className="font-bold">{price}</p>

              <button onClick={addProduct} className="w-[36px] h-[36px] bg-cyan-400 active:bg-green-600  rounded-md flex items-center justify-center">
                <Karzinkaa />
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
