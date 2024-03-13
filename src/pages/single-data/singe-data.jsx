import React from "react";
import { useParams } from "react-router-dom";
import { Like } from "../../imgs-icon/icons/like";
import {  useDispatch } from "react-redux";
import { add } from "../../redux/reducer/product-reducer";


import { useGetCategorys } from "../home/serves/query/useGetCategorys";

export const SingeData = ({id, datakey, img, name, price, discount, userCount,userPrice,count,totalPrice  }) => {
  const { id:j, datakey:l } = useParams();
  const { data } = useGetCategorys(l,j);
  
  const dispatch = useDispatch();

  const addProduct = ()=>{
    dispatch(add( {id, datakey, img, name, price, discount, userCount,userPrice,count,totalPrice  }))
 }
  return (
    <div className="container pt-6 pb-6">
      {data ? (
        <>
          <h1 className="text-2xl font-bold">{data?.name}</h1>
          <div className="flex items-center">
            <Like />
            <p>В избранное</p>
          </div>
          <div className="flex justify-between">
            <img src={data.img} alt="" />
            <div className="w-[300px] border-2 h-[170px] p-3">
            <p className="text-2xl text-[#999999]  line-through">{data.discount}$</p>
            <p className="font-bold text-3xl">{data.price}$</p>
            <button onClick={addProduct} className="bg-cyan-400 active:bg-green-600 w-full p-3 mt-3 text-xl font-bold active:text-white">В корзину</button>
            </div>
          </div>
        </>
      ) : (
        <h1>malumot topilmadi</h1>
      )}
    </div>
  );
};
