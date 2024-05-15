import React, { useEffect, useState } from "react";
import logoMoney from "../../images/coinsvart-01.png";
import { FaCartPlus } from "react-icons/fa";
import { useAddItemContext } from "../../contexts/AddItemProvider";

const ToDoNavBar = () => {
  const [coinMain, setCoinMain] = useState(0);
  const { render, coin } = useAddItemContext();

  useEffect(() => {
    const coinFromLocalStorage = parseInt(localStorage.getItem("coin")) || 0;
    setCoinMain(coinFromLocalStorage);
  }, [render, coin]);

  return (
    <div className="bg-todo-navbar-bg font-poetsen flex justify-between items-center">
      <div className="flex items-center gap-2 p-6">
        <img
          alt=""
          src="https://i.pinimg.com/736x/23/9c/8b/239c8b746f24fa6f4b6b3630e64fed9f.jpg"
          className="w-12 h-12 rounded-full shadow-md"
        />
        <div className="flex flex-col">
          <h1 className="font-bold text-white uppercase tracking-widest drop-shadow-xl">
            Welcome
          </h1>
          <h2 className="text-wheat-text tracking-wider drop-shadow-md">
            Baris
          </h2>
        </div>
      </div>

      {/* Money */}
      <div className="p-4 flex gap-2 items-center">
        <img alt="" src={logoMoney} className="w-8 h-8" />
        <div className="border border-gray-600 rounded-md px-4 py-2 bg-money-bg bg-opacity-60 text-white relative flex items-center shadow-xl w-28">
          <h1 className="mr-10">{coinMain}</h1>
          <button className="bg-gray-600 rounded-md text-md p-3 absolute right-0 hover:scale-110 hover:bg-gray-800 transition duration-100 ease-in hover:text-green-400">
            <FaCartPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoNavBar;
