import React, { useContext, useEffect } from "react";
import { ItemContext } from "../context/ItemContext";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router";

const ViewItem = () => {
  const { items, setItems } = useContext(ItemContext);
  console.log(items);
  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("allItems")) || []);
  }, []);

  return (
    <div className="list_view_item mt-20 w-[23rem] m-auto flex flex-col  gap-1">
      <h2 className="pb-3 text-center text-2xl uppercase font-bold  ">ALL Items</h2>
      {items?.map((item, index) => {
        return (
          <div
            key={index}
            className="list_view flex justify-between px-3  bg-green-700 p-1.5 shadow-xl rounded-md"
          >
            <div className="list_view_left flex items-center gap-4">
              <div className="list_view_item_img w-[40px] h-[40px] rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover "
                  src={item?.coverImage}
                  alt=""
                />
              </div>
              <p className="text-[12px]">{item.name}</p>
            </div>
            <div className="list_view_item_btn flex items-center gap-4 ">
              <Link to={`/ViewItemDetail/${item.id}`} >
                <FaRegEye />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ViewItem;
