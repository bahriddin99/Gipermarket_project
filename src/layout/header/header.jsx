import React from "react";
import { Call } from "../../imgs-icon/icons/call";
import {Logo} from "../../imgs-icon/icons/logo"
import { Vector } from "../../imgs-icon/icons/vector";
import { Karzinkaa } from "../../imgs-icon/icons/card";
import { Like } from "../../imgs-icon/icons/like";
import { Link, useNavigate } from "react-router-dom";
import { HeaderContact } from "./header-contact";
import { SearchInput } from "../../componets/form/searchs";
import { useSelector } from "react-redux";

export const Header = () => {
  const { count } = useSelector((state) => state.product);
  
  const navigate = useNavigate();
  const cartnavigate = () => {
    navigate("/karzinka");
  };
  return (
    <div className="bg-header">
      <section className="Call pt-3 pb-3  container">
        <div className="flex item-center justify-end gap-5">
          <a href="#">Доставка и оплата</a>
          <a href="#">Пункты выдачи</a>
          <a href="#">Поддержка</a>
          <div className="flex  ">
            <Link to={`+998906477999`} className="flex items-center gap-1">
              <Call />
              <h1>+998 90 647 79 99</h1>
            </Link>
          </div>
        </div>
      </section>

      <main className="Logo mt-2  bg-header container pb-7">
        <div className="">
          <div className="flex gap-8 item-center relative  ">
            <Link to={"/"} className="items-center flex">
              <Logo/>
            </Link>
            <Link to={""} className="flex gap-2 border-2  rounded-md w-[150px] p-[10px] text-xl items-center">
              <Vector /> Каталог
            </Link>
            <div className="relative flex gap-[700px]">
              <SearchInput />
              <div className="flex  gap-6">
                <HeaderContact />
                <div className="flex flex-col items-center">
                  <Like />
                  <p className="text-black ">Избранное</p>
                </div>

              
                <button
                  onClick={cartnavigate}
                  className="flex flex-col items-center relative"
                >
                    <span className="w-[16px] h-[16px] rounded-full bg-red-500 absolute text-[10px] text-white ml-6 mt-[-6px]">
                  {count}
                </span>
                  <Karzinkaa />
                  <p className="text-black ">Корзина</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
