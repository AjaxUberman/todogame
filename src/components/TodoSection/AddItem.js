import React, { useState } from "react";
import { useAddItemContext } from "../../contexts/AddItemProvider";
import { AiFillAlert } from "react-icons/ai";
import { FaClock } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import { FaNetworkWired } from "react-icons/fa";
import { FaKeyboard } from "react-icons/fa";

const AddItem = () => {
  /* Context datas */
  const {
    quest,
    setQuest,
    iconActive,
    setIconActive,
    selectedIcon,
    setSelectedIcon,
    timeActive,
    setTimeActive,
    selectedTime,
    setSelectedTime,
    diffValue,
    difficultActive,
    setDifficultActive,
    diffHandler,
    saveHandler,
  } = useAddItemContext();

  /*  Fake API*/
  const saveApiHandler = async () => {
    console.log("saveApiHandler called");
    const newPost = { quest, selectedIcon, selectedTime, diffValue };
    try {
      const response = await fetch("http://localhost:3001/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Post ++:", data);
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  /* IconMap */
  const iconMap = {
    AiFillAlert: <AiFillAlert />,
    FaBook: <FaBook />,
    GiGymBag: <GiGymBag />,
    FaNetworkWired: <FaNetworkWired />,
    FaKeyboard: <FaKeyboard />,
  };

  return (
    <div className="bg-white px-6 py-6 mx-6 h-48 flex flex-col justify-center gap-4 font-poetsen relative rounded-xl border border-gray-400 ">
      <div className="flex gap-4 items-center justify-center">
        {/* Quest Input */}
        <div className="flex flex-col gap-2 items-center">
          {quest !== "" ? (
            " "
          ) : (
            <span className="text-red-700 tracking-wider">
              You Must Enter Quest!
            </span>
          )}
          <div className="flex gap-4">
            <input
              placeholder="Add Quest!"
              value={quest}
              className="border border-gray-400 rounded-full px-4 py-2 focus:border-green-400 focus:outline-none focus:scale-105 transition duration-100 ease-in shadow-lg placeholder-opacity-60 "
              onChange={(e) => setQuest(e.target.value)}
            />{" "}
            {/* Icon */}
            <div className="border border-gray-400 p-4 rounded-full shadow-md relative">
              <div onClick={() => setIconActive(!iconActive)}>
                {iconMap[selectedIcon] || <AiFillAlert />}
              </div>
              {/* Icon Menu */}
              {iconActive ? (
                <div className="absolute right-6 translate-y-4 z-10 shadow-lg border border-gray-400 rounded-xl bg-white w-44">
                  <ul className="grid grid-cols-3 gap-x-4 gap-y-2 px-2 py-2">
                    <li
                      className="border border-gray-400 flex items-center justify-center w-10 h-10 rounded-md hover:text-green-400 hover:bg-yellow-200 hover:scale-105 transition duration-100 ease-in"
                      onClick={() => {
                        setSelectedIcon("AiFillAlert");
                        setIconActive(false);
                      }}
                    >
                      <AiFillAlert />
                    </li>
                    <li
                      className="border border-gray-400 flex items-center justify-center w-10 h-10 rounded-md hover:text-green-400 hover:bg-yellow-200 hover:scale-105 transition duration-100 ease-in"
                      onClick={() => {
                        setSelectedIcon("FaBook");
                        setIconActive(false);
                      }}
                    >
                      <FaBook />
                    </li>
                    <li
                      className="border border-gray-400 flex items-center justify-center w-10 h-10 rounded-md hover:text-green-400 hover:bg-yellow-200 hover:scale-105 transition duration-100 ease-in "
                      onClick={() => {
                        setSelectedIcon("GiGymBag");
                        setIconActive(false);
                      }}
                    >
                      <GiGymBag />
                    </li>
                    <li
                      className="border border-gray-400 flex items-center justify-center w-10 h-10 rounded-md hover:text-green-400 hover:bg-yellow-200 hover:scale-105 transition duration-100 ease-in "
                      onClick={() => {
                        setSelectedIcon("FaNetworkWired");
                        setIconActive(false);
                      }}
                    >
                      <FaNetworkWired />
                    </li>
                    <li
                      className="border border-gray-400 flex items-center justify-center w-10 h-10 rounded-md hover:text-green-400 hover:bg-yellow-200 hover:scale-105 transition duration-100 ease-in "
                      onClick={() => {
                        setSelectedIcon("FaKeyboard");
                        setIconActive(false);
                      }}
                    >
                      <FaKeyboard />
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Side */}
      {/* TIME */}
      <div className="flex justify-center gap-4 ">
        <div className="flex gap-2 items-center justify-center border border-gray-400 rounded-full px-4 py-2 shadow-md  text-red-400 relative w-36">
          <FaClock />
          <div className="flex flex-col">
            <button onClick={() => setTimeActive(!timeActive)}>
              {selectedTime
                ? selectedTime >= 60
                  ? `${Math.floor(selectedTime / 60)}H ${selectedTime % 60}M`
                  : selectedTime + "M"
                : "45M"}
            </button>
          </div>
          {timeActive === true ? (
            <div className="flex flex-col absolute translate-y-20  h-[105px] w-20 rounded-md border border-gray-400  overflow-y-auto bg-white z-50 ">
              {Array.from({ length: 245 / 5 }, (_, index) => (
                <button
                  key={index}
                  className="border text-center hover:text-green-400 transition duration-100 ease-in"
                  onClick={() => {
                    setSelectedTime(index * 5);
                    setTimeActive(false);
                  }}
                >
                  {index * 5}
                </button>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>

        {/* Difficult */}
        <div className="relative">
          <button
            className={`border border-gray-400 rounded-full px-4 py-2 shadow-md w-24  ${
              diffValue === "Easy"
                ? "text-green-400"
                : diffValue === "Medium"
                ? "text-money-bg"
                : diffValue === "Hard"
                ? "text-red-800"
                : "text-gray-400"
            }`}
            onClick={() => setDifficultActive(!difficultActive)}
          >
            {diffValue}
          </button>
          {difficultActive ? (
            <div className="absolute translate-x-1 translate-y-2 z-10 border border-gray-400 rounded-md bg-white bg-opacity-100 w-20 text-center  ">
              <ul className="text-sm font-extralight flex flex-col items-center justify-center">
                <button
                  className="border-b border-gray-400 text-green-400 w-full py-2"
                  onClick={() => diffHandler("Easy")}
                >
                  Easy
                </button>
                <button
                  className="border-b text-money-bg border-gray-400 w-full py-2"
                  onClick={() => diffHandler("Medium")}
                >
                  Medium
                </button>
                <button
                  className="py-2 text-red-800"
                  onClick={() => diffHandler("Hard")}
                >
                  Hard
                </button>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
        {/* SAVE */}
        <div className="absolute right-0 -bottom-4">
          <button
            className="bg-green-400 px-4 py-2 rounded-full text-white drop-shadow-xl shadow-md border-b border-gray-400 hover:bg-green-600 hover:scale-110 transition duration-100 ease-in hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4)]"
            onClick={() => {
              saveHandler();
              saveApiHandler();
            }}
            disabled={quest === ""}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
