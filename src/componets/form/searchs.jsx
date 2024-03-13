import React from "react";
import { Searchs } from "../../imgs-icon/icons/search";
import { userGetAll } from "../../pages/home/serves/query/userGetAll";
import useDebounce from "../../hook/usedbouse";


export const SearchInput = () => {
  const [value, setValue] = React.useState("");
  
  const { data, isLoading } = userGetAll(value);


  

  return (
    <div>
      <form className="absolute z-10 ">
        <div className="w-[673px] border-2 flex p-3 rounded-md ">
          <input
            className="w-[673px] outline-none bg-header "
            onChange={(e) => setValue(e.target.value)}
            value={value}
            id="search"
            type="text"
            placeholder="Поиск"
          />
          <label htmlFor="search">
            <Searchs />
          </label>
        </div>
        <div className="overflow-auto  h-[60vh] w-[673px]  absolute ">
          {isLoading ? (
            <h1>Loading...</h1>
          ) : value.length > 3 ? (
            data?.map((item) => (
              <div
                key={item.id}
                className=" w-full overflow-auto flex border p-2 gap-4 bg-white items-center "
              >
                <img className="w-[10%]" src={item.img} alt="" />
                <div>
                  <h1 className="font-bold">{item.name}</h1>
                  {/* <p className="line-through">{item.discount}</p> */}
                  <p className="font-bold">{item.price}</p>
                </div>
              </div>
            ))
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
};
