import React from "react";
import { useParams } from "react-router-dom";
import { Like } from "../../imgs-icon/icons/like";
import { userbannercard } from "../home/serves/query/useGetCategory";
import { userGetCards } from "../home/serves/query/userGetCards";
import { Karzinkaa } from "../../imgs-icon/icons/card";
import { Link } from "react-router-dom";

export const SingeCards = () => {
  const { datakey } = useParams();
  const { data } = userGetCards(datakey);
  return (
    <Link to={""}>
      <div className="container grid grid-cols-4  items-start justify-center">
        {data?.map((item) => (
          <div className="pt-3 pb-6  ">
            <div className="w-[214px] h-[323px] gap-3 pt-2 flex flex-col items-center text-center hover:border border-slate-400 hover:shadow-2xl rounded-md ">
              <div className="flex gap-3">
                <img className="w-[165] h-[165px]" src={item.img} alt="" />
                <div className="pt-4">
                  {" "}
                  <Like />
                </div>
              </div>
              <div className="flex flex-col  h-[110px] justify-between">
                <h1>{item.name}</h1>
                <div className="">
                  <p className="text-[#999999] line-through">{item.discount}</p>
                  <div className="flex gap-3 items-center self-end justify-center">
                    <p className="font-bold">{item.price}</p>
                    <div className="w-[36px] h-[36px] bg-cyan-400  rounded-md flex items-center justify-center">
                      {" "}
                      <Karzinkaa />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Link>
  );
};
