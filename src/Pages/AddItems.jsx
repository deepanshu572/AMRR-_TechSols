import { useContext, useEffect, useRef, useState } from "react";
import { ItemContext } from "../context/ItemContext";
import { Link } from "react-router";
import { FaRegEye } from "react-icons/fa";

const AddItems = () => {
  const name = useRef(null);
  const type = useRef(null);
  const desc = useRef(null);
  const [coverImage, setCoverImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  //   const [Data, setData] = useState([]);
  const { items, setItems } = useContext(ItemContext);

  const handleForm = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      name: name.current.value,
      type: type.current.value,
      desc: desc.current.value,
      coverImage: coverImage,
      additionalImages: additionalImages,
    };

    const existingItems = JSON.parse(localStorage.getItem("allItems")) || [];

    const updatedItems = [...existingItems, newItem];

    localStorage.setItem("allItems", JSON.stringify(updatedItems));
    alert("Product Added Successfully !")
    setItems(updatedItems);
    name.current.value = "";
    type.current.value = "";
    desc.current.value = "";
    setCoverImage(null);
    setAdditionalImages([]);
  };

  const handleCoverImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
    }
  };
  const handleAdditionalImage = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setAdditionalImages((prev) => [...prev, ...urls]);
  };

  return (
    <div className="add flex items-center text-[#fff] justify-center flex-col mt-9 p-3 m-3 gap-3">
      <div className="head text-7xl ">📝</div>
      <h3 className=" text-center text-2xl uppercase font-bold">
        Add Your Items
      </h3>
      <form onSubmit={handleForm} className="add_form">
        <div className="add_inp  w-[23rem] gap-1 m-auto p-1.5 shadow-xl rounded-md    text-[#000]  ">
          <div className="wrap flex w-full gap-1 items-center justify-between">
            <div className="div flex gap-3 w-[94%]  text-[#fff] border-b-1 border-green-800 items-center  p-1.5 py-2  ">
              <input
                type="text"
                placeholder="Item name..."
                ref={name}
                className="text-[14px] outline-0 w-full "
              />
            </div>
            <div className="div flex gap-3 w-[94%]  text-[#fff] border-b-1 border-green-800 items-center  p-1.5 py-2  ">
              <input
                type="text"
                placeholder="Item type.."
                ref={type}
                className="text-[14px] outline-0 w-full "
              />
            </div>
          </div>
          <div className="div flex gap-3 items-center w-full text-[#fff] border-b-1 border-green-800 my-1.5  p-1.5 py-2   ">
            <input
              type="text"
              ref={desc}
              placeholder="Item description"
              className="text-[14px] outline-0 w-full "
            />
          </div>
          <div className="wrap flex gap-2  flex-col ">
            <div className="div flex gap-3 flex-col text-[#fff]  p-1.5 py-2  ">
              <p className="text-[14px]">Cover File</p>
              <input
                type="file"
                id="file"
                onChange={handleCoverImage}
                className="text-[14px] hidden outline-0 w-full "
              />
              {coverImage ? (
                <img
                  src={coverImage}
                  className="w-[77.6px] h-[80px] object-cover object-top "
                />
              ) : (
                <label
                  className="py-[20px] px-[34px] cursor-pointer bg-black w-fit"
                  htmlFor="file"
                >
                  +
                </label>
              )}
            </div>
            <div className="div flex gap-3  flex-col text-[#fff]   p-1.5 py-2  ">
              <p className="text-[14px]">Additional images</p>
              <div className="flex justify-between gap-1">
                <input
                  type="file"
                  id="file_inp1"
                  onChange={handleAdditionalImage}
                  multiple
                  className="text-[14px] hidden outline-0 w-full "
                />
                <label
                  htmlFor="file_inp1"
                  className=" py-[18px] px-[34px] cursor-pointer bg-black w-fit "
                >
                  +
                </label>
                {additionalImages?.map((item) => {
                  return (
                    <img
                      src={item}
                      className="w-[77.6px] h-[80px] object-cover object-top "
                    />
                  );
                })}
                {/* <input
                  type="file"
                  id="file_inp2"
                  className="text-[14px] hidden outline-0 w-full "
                />
                <label
                  htmlFor="file_inp2"
                  className=" py-[18px] px-[34px] cursor-pointer bg-black w-fit "
                >
                  +
                </label>
                <input
                  type="file"
                  id="file_inp3"
                  className="text-[14px] hidden outline-0 w-full "
                />
                <label
                  htmlFor="file_inp3"
                  className=" py-[18px] px-[34px] cursor-pointer bg-black w-fit "
                >
                  +
                </label> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
        <div className="btn px-3 text-[14px] bg-green-600 w-[10rem] rounded-xs py-2 m-auto my-4 p-2 text-center ">
          <button className="w-full gap-2 flex items-center justify-center" type="submit">+ Add</button>
        </div>
        <Link to={"view"} className="btn px-3 text-[14px] bg-green-600  w-[10rem]  rounded-xs py-2 m-auto my-4 p-1 text-center ">
          <button className="w-full gap-2 flex items-center justify-center" type="submit"><FaRegEye />View</button>
        </Link>
        </div>
      </form>
    </div>
  );
};

export default AddItems;
