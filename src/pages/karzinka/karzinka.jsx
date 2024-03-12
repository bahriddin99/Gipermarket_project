import React from "react";
import { useSelector } from "react-redux";
import { Like } from "../../imgs-icon/icons/like";
import { Delet } from "../../imgs-icon/icons/delet";
import { useDispatch } from "react-redux";
import { toogleAnmount } from "../../redux/reducer/product-reducer";

export const Karzinka = () => {
  const dispatch = useDispatch();
  // const [showBtn, setShowBtn] = React.useState(false)


  const addAdd = (id) => {
    dispatch(toogleAnmount({ type: "add", id }));
  
  };
  const addRemove = (id)=>{
    dispatch(toogleAnmount({ type: "remove", id }));
  }

  const { products } = useSelector((state) => state.product);
  console.log(products);

  return (
    <div className="container  ">
      <h1 className="font-bold">Корзина</h1>
      <div className="w-full ">
        {products.map((products) => (
          <div key={products.id} className="flex gap-8 pt-5 border mt-2 w-">
            <img src={products.img} alt="img" />

            <div className="text-xl font-bold flex gap-6 flex-col">
              <div className="flex gap-4">
                <h2>{products.name}</h2>
                {/* <p>{products.count} ta bor</p> */}
                <p className="text-xl">{products?.userPrice} so'm</p>
              </div>

              <div className="flex  justify-startitems-center  gap-14 w-full   pt-10  ">
                <div className="flex items-center gap-6 text-slate-400 ">
                  <div className="flex items-center gap-2">
                    <Like />
                    <p className="text-slate-400 text-[15px]">В избранное</p>
                  </div>
                  <button className="flex items-center">
                    <Delet />
                    <p className="text-slate-400 text-[15px]">Удалить</p>
                  </button>
                </div>

                <div className="flex items-center">
                  <button
                  // disabled={showBtn || userCount === count}
                    onClick={() => addAdd(products.id)}
                    className="h-[36px] w-[36px] border-2 border-footer text-xl text-gray-500"
                  >
                    +
                  </button>
                  <p className="h-[36px] w-[56px] border-2 bg-footer text-center  flex justify-center items-center">
                    {products.userCount}
                  </p>

                  
                  <button  onClick={() => addRemove(products.id)} className="h-[36px] w-[36px] border-2 border-footer text-2xl  text-gray-500 ">
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
