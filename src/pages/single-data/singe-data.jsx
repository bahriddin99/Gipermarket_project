import React from "react";
import { useParams } from "react-router-dom";
import { Like } from "../../imgs-icon/icons/like";
import { ButtonKarzinka } from "../../componets/button/button-karzinka";

import { useGetCategorys } from "../home/serves/query/useGetCategorys";

export const SingeData = () => {
  const { id, datakey } = useParams();
  const { data } = useGetCategorys(datakey, id);
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
            <p className="text-2xl text-[#999999]  line-through">{data.discount}</p>
            <p className="font-bold text-3xl">{data.price}</p>
            <ButtonKarzinka/>
            </div>
          </div>
        </>
      ) : (
        <h1>malumot topilmadi</h1>
      )}
    </div>
  );
};
