import React, { useState, useEffect } from "react";
import { FaBookmark } from "react-icons/fa";
import logoMoney from "../../images/coinsvart-01.png";
import { TiTick } from "react-icons/ti";
import { useAddItemContext } from "../../contexts/AddItemProvider";
import { AiFillAlert } from "react-icons/ai";
import { FaClock } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import { FaNetworkWired } from "react-icons/fa";
import { FaKeyboard } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const Quests = () => {
  const { items, render, setRender, setCoin } = useAddItemContext();
  const [datas, setDatas] = useState([]);
  const [longTextActive, setLongTextActive] = useState(null);
  const [gold, setGold] = useState(parseInt(localStorage.getItem("coin")) || 0);

  useEffect(() => {
    localStorage.setItem("coin", JSON.stringify(gold));
    setCoin(gold);
  }, [gold]);

  const renderHandler = () => {
    setRender(!render);
  };

  /* Api Datas */
  useEffect(() => {
    const apiHandler = async () => {
      try {
        const response = await fetch("http://localhost:3001/todos");
        if (!response.ok) {
          throw new Error("Network error.");
        }
        const data = await response.json();
        setDatas(data);
      } catch (error) {
        console.error("Error!!", error);
      }
    };
    apiHandler();
  }, [items, render]);

  /* DELETE HANDLER */
  const deleteHandler = async (index) => {
    const itemDelete = datas[index];
    try {
      const response = await fetch(
        `http://localhost:3001/todos/${itemDelete.id}`,
        {
          method: "DELETE",
        }
      );

      const updatedItems = datas.filter((item, i) => i !== index);
      setDatas(updatedItems);
      /* Items for Coin Update */
    } catch (error) {
      console.error("Error adding post:", error);
    }
    if (datas[index].diffValue === "Easy") {
      setGold(gold + 100);
    } else if (datas[index].diffValue === "Medium") {
      setGold(gold + 200);
    } else if (datas[index].diffValue === "Hard") {
      setGold(gold + 300);
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
    <div className="p-6 font-poetsen flex flex-col gap-6">
      {longTextActive ? (
        <div className="absolute bg-black opacity-65 inset-0 z-40"></div>
      ) : (
        ""
      )}
      {datas &&
        datas.map((item, index) => (
          <div
            key={index}
            className="border border-gray-400 h- bg-white bg-opacity-50 rounded-full px-4 py-4 flex items-center justify-around relative "
          >
            <div className="bg-gray-400 rounded-full text-white p-5 absolute left-0">
              {iconMap[item.selectedIcon] || <FaBookmark />}
            </div>
            <div className="ml-10">
              <button onClick={() => setLongTextActive(index)}>
                {item.quest.length > 10
                  ? item.quest.slice(0, 10).concat("...")
                  : item.quest}
              </button>

              {longTextActive === index ? (
                <div className="absolute bg-white w-60 h-20 z-50 text-center border border-gray-500 flex justify-center items-center rounded-md">
                  <button
                    className="absolute -right-4 -top-4 bg-red-400 rounded-full text-white p-2 text-xl"
                    onClick={() => setLongTextActive(null)}
                  >
                    <IoCloseOutline />
                  </button>
                  <h1 className="break-all p-4">{item.quest}</h1>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="text-red-400 flex items-center gap-1">
              <FaClock />
              <h1 className="">
                {item.selectedTime
                  ? item.selectedTime >= 60
                    ? `${Math.floor(item.selectedTime / 60)}H ${
                        item.selectedTime % 60
                      }M`
                    : item.selectedTime + "M"
                  : "45M"}
              </h1>
            </div>
            <div className="flex items-center mr-10">
              <img alt="" src={logoMoney} className="w-6 h-6" />
              <span className="text-sm text-yellow-400">
                {item.diffValue === "Easy"
                  ? "+100"
                  : item.diffValue === "Medium"
                  ? "+200"
                  : item.diffValue === "Hard"
                  ? "+300"
                  : ""}
              </span>
            </div>
            <button
              className="text-white hover:text-green-400 hover:bg-white hover:border border-gray-400 hover:scale-110 transition duration-100 ease-in bg-black rounded-full p-2 text-2xl absolute right-4"
              onClick={() => {
                deleteHandler(index);
                renderHandler();
              }}
            >
              <TiTick />
            </button>
          </div>
        ))}
    </div>
  );
};

export default Quests;
