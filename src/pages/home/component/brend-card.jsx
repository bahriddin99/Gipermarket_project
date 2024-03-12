import React from "react";
import { Link } from "react-router-dom";

export const BrendCard = ({ img }) => {
  return (
    
     <div className="w-[181px] h-[90px] bg-footer rounded-md flex items-center justify-center ">
     <img className="object-cover" src={img} alt="" />
   </div>
  );
};
