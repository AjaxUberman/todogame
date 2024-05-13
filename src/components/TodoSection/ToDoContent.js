import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Quests from "./Quests";
import AddItem from "./AddItem";
import { useAddItemContext } from "../../contexts/AddItemProvider";

const ToDoContent = () => {
  const { menuActive, setMenuActive } = useAddItemContext();

  return (
    <div className="bg-todo-content-bg h-screen">
      <div className="flex justify-between p-6 font-poetsen items-center">
        <h1 className="tracking-wider border-b border-black">Your Quests!</h1>
        <button
          className="border border-gray-400 px-4 py-2 rounded-full bg-green-400 text-white"
          onClick={() => setMenuActive(!menuActive)}
        >
          <FaPlus />
        </button>
      </div>
      <div>{menuActive ? <AddItem /> : ""}</div>
      <div>
        <Quests />
      </div>
    </div>
  );
};

export default ToDoContent;
