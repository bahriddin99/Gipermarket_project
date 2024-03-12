import React from "react";
import { AksiyaCard } from "./aksiya-card";
import { useraksiyacard } from "../serves/query/useGetCategory";

export const Aksiya = () => {
  const { data } = useraksiyacard();
  return (
    <div className=" bg-gray-100">
        <h1 className=" container font-bold text-2xl pt-3">Акции</h1>
      <div className="container flex  gap-3 pt-4 pb-6">
        {data?.map((item) => (
          <AksiyaCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
