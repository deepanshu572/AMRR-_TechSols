import React, { useContext, useEffect, useState } from "react";
import { ItemContext } from "../context/ItemContext";
import { useParams } from "react-router";

const ViewItemDetail = () => {
  const { items, setItems } = useContext(ItemContext);
  const [Img, setImg] = useState()
  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("allItems")) || []);
  }, []);

  const { id } = useParams();
  const Filter = items.filter((item) => {
    return item.id == id;
  });

  const FilterData = Filter[0];
  console.log(FilterData);


  return (
    <>      <h2 className="pb-3 text-center mt-7 text-2xl uppercase font-bold  ">Detail Page</h2>

    <div className="details flex h-[100vh] gap-4 items-center justify-center">
        
        <div className="wrap hide_scroll scroll-smooth overflow-x-scroll w-[25rem] ">
        
      <div className={`img_left  flex items-center gap-2 w-full `}>
        {FilterData?.additionalImages.map((item) => {
          return <img className="w-full translate-x-0" src={item} alt="" />;
        })}
      </div>
      </div>
      <div className="txt_right  w-[25rem] ">
        <h2>{FilterData?.name}</h2>
        <p>{FilterData?.type}</p>
        <small>{FilterData?.desc}</small>
      </div>
    </div>
    </>
  );
};

export default ViewItemDetail;
