import React from "react";
import { FaListUl } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";

const ToDoFooter = () => {
  return (
    <div className="bg-white border border-gray-400 rounded-sm w-screen h-16 flex items-center justify-between px-16">
      <div className="text-xl hover:scale-110 hover:text-green-400 transition duration-100 ease-in drop-shadow-xl">
        <FaListUl />
      </div>
      <div>
        <img
          src="https://i.pinimg.com/736x/23/9c/8b/239c8b746f24fa6f4b6b3630e64fed9f.jpg"
          className="rounded-full w-24 h-24 border border-gray-400 hover:-translate-y-3 transition duration-300 ease-in shadow-xl"
        />
      </div>
      <div className="text-3xl hover:scale-110 hover:text-green-400 transition duration-100 ease-in drop-shadow-xl">
        <CiShoppingBasket />
      </div>
    </div>
  );
};

export default ToDoFooter;
