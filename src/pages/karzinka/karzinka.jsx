import React from "react";
import { useSelector } from "react-redux";
import { Like } from "../../imgs-icon/icons/like";
import { Delet } from "../../imgs-icon/icons/delet";
import { useDispatch } from "react-redux";
import { toogleAnmount,remove } from "../../redux/reducer/product-reducer";

export const Karzinka = () => {
  const dispatch = useDispatch();
  const [removeBtn, setRemoveBtn] = React.useState(false);
  // const [showBtn, setShowBtn] = React.useState(false)

  const addAdd = (id) => {
    dispatch(toogleAnmount({ type: "add", id }));
  };
  const addRemove = (id) => {
   
    dispatch(toogleAnmount({ type: "remove", id }));
  };
  const addDelet=(id)=>{
    dispatch(remove({id}))
  }
 

  const { products, totalPrice } = useSelector((state) => state.product);

  return (
    <div className="container  ">
      <h1 className="font-bold">Корзина</h1>
       
      <div className="flex gap-16  border">
        <div>
        {products.map((products) => (
          <div key={products.id} className="flex gap-8 pt-5  mt-2 w-">
            <img src={products.img} alt="img" />

            <div className="text-xl font-bold flex gap-6 flex-col">
              <div className="flex gap-4">
                <h2>{products.name}</h2>
                {/* <p>{products.count} ta bor</p>  */}
                <p className="text-xl">{products?.userPrice} $</p>
              </div>

              <div className="flex  justify-startitems-center  gap-14 w-full   pt-10  ">
                <div className="flex items-center gap-6 text-slate-400 ">
                  <div className="flex items-center gap-2">
                    <Like />
                    <p className="text-slate-400 text-[15px]">В избранное</p>
                  </div>
                  <button onClick={()=>addDelet(products.id)} className="flex items-center  active:bg-red-600 rounded-md ">
                    <Delet />
                    <p className="text-slate-400 active:text-white text-[15px]">Удалить</p>
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

                  <button
                    disabled={products.userCount < 2}
                    onClick={() => addRemove(products.id)}
                    className="h-[36px] w-[36px] border-2 border-footer text-2xl  text-gray-500 "
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>

         <div className="w-[320px] h-[209px] bg-footer mt-20 z-10 relative">
          <div className="p-3 flex flex-col justify-between gap-[85px]">
            <h1 className="font-bold">В корзине</h1>
            <h1 className="text-xl font-bold">{totalPrice} $</h1>
          </div>
          <button className="w-full bg-teal-500 p-3 mb-0">
            Оформить заказ
          </button>
        </div>
      </div>

    </div>
  );
};
