import React from "react";

import logo from "../../imgs-icon/imgs/logo.svg"
import { Facebook } from "../../imgs-icon/icons/facebook";
import { Adnak } from "../../imgs-icon/icons/adnak";
import { Vkontak } from "../../imgs-icon/icons/vkontak";
import { Youtube } from "../../imgs-icon/icons/youtube";
import { Instagram } from "../../imgs-icon/icons/instagram";
import { Payme } from "../../imgs-icon/icons/payme";
import { Uzcard } from "../../imgs-icon/icons/uzcard";
import { Humo } from "../../imgs-icon/icons/humo";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="bg-footer pt-7 pb-7">
        <div className="container  grid grid-cols-4">
          <div className="">
            <img src={logo} alt="logo" />
            <div className="pt-3">
              <h1 className="font-bold text-[21px]">+998906477999</h1>
              <p>справочная служба</p>
            </div>
            <div className="pt-3 text-[21px]">
              <h1 className="font-bold">+998906477999</h1>
              <p>интернет-магазин</p>
            </div>
            <div className="pt-3 text-[14xpx]">
              <h1 className="font-bold">Оставайтесь на связи</h1>
            </div>
            <div className="flex gap-5 pt-2">
              <Link to={`https://www.facebook.com/bahriddin.shavqiyev.7?locale=ru_RU`} target="_blank">
              <Facebook />
              </Link>
              <Adnak />
              <Vkontak />
              <Link to={`https://www.youtube.com/channel/UCXKpRdvN2r266-G-wlPTN1Q`} target="_blank">
                <Youtube />
              </Link>
              <Link to={`https://www.instagram.com/bakhriddin_shavqiyev/`} target="_blank">
                <Instagram />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p>Условия обмена и возврата</p>
            <p>Каталог</p>
            <p>О компании</p>
            <p>Контакты</p>
            <p>Доставка</p>
            <p>Оплата</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>Клиентам</p>
            <p>Личный кабинет</p>
            <p>Блог</p>
            <p>Обратная связь</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>Информация</p>
            <p>Пользовательское соглашение</p>
            <p>Политика конфиденциальности и оферта</p>
          </div>
        </div>
      </footer>

      <div className="bg-footer2">
        <div className="container flex justify-between pt-4 pb-4">
          <h1>
            © 2022 Любое использование контента без письменного разрешения
            запрещено
          </h1>
          <div className="flex gap-4 items-center">
            <Payme />
            <Uzcard />
            <Humo />
          </div>
        </div>
      </div>
    </>
  );
};
