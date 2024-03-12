import React from "react";
import {PhoneNoutbookCard} from "../../../pages/home/component/phone-noutbook-card"
import { userphonecard } from "../serves/query/useGetCategory";
import { usernoutbookcard } from "../serves/query/useGetCategory";

export const PhoneNoutbook = () => {
const {data} = userphonecard()
const{data:data2} = usernoutbookcard()

  return (
    <div className="container pt-5 pb-12">
      <div className="flex items-start gap-5 justify-center">
        <div className="flex flex-col gap-5">
            <h1 className="font-bold text-xl pb-5 ">Смартфоны и планшеты</h1>
       {data?.slice(0,4).map((item)=>(
        <PhoneNoutbookCard key={item.id} {...item}/>
       ))}
        </div>

        <div className="flex flex-col gap-5">
            <h1 className="font-bold text-xl pb-5 ">Смартфоны и планшеты</h1>
       {data2?.slice(0,4).map((item)=>(
        <PhoneNoutbookCard key={item.id} {...item}/>
       ))}
        </div>



        <div className="flex flex-col gap-5">
            <h1 className="font-bold text-xl pb-5 ">Смартфоны и планшеты</h1>
       {data?.slice(0,4).map((item)=>(
        <PhoneNoutbookCard key={item.id} {...item}/>
       ))}
        </div>
      </div>
    </div>
  );
};
