import React from "react";
import { Searchs } from "../../imgs-icon/icons/search";
import { userphonecard } from "../../pages/home/serves/query/useGetCategory";
import useDebounce from "../../hook/usedbouse";
import { usernoutbookcard } from "../../pages/home/serves/query/useGetCategory";

export const SearchInput = () => {
  const [value, setValue] = React.useState("");
  const search = useDebounce(value);
  const { data, isLoading } = userphonecard(search);
  const { data: data2, isLoading: isLoading2 } = usernoutbookcard(search);

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
        <div className="overflow-auto  h-[60vh]">
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

          {isLoading2 ? (
            <h1>Loading...</h1>
          ) : value.length > 3 ? (
            data2?.map((item) => (
              <div
                key={item.id}
                className=" w-full overflow-auto flex p-2 border gap-4 bg-white items-center "
              >
                <img className="w-[10%]" src={item.img} alt="" />
                <div>
                  <h1 className="font-bold">{item.name}</h1>
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
