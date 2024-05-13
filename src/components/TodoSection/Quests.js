import React, { useState, useEffect } from "react";
import { FaBookmark } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import logoMoney from "../../images/coinsvart-01.png";
import { TiTick } from "react-icons/ti";
import { useAddItemContext } from "../../contexts/AddItemProvider";

const Quests = () => {
  const { items, setItems, coin, setCoin } = useAddItemContext();
  const [filtered, setFiltered] = useState([]);

  const deleteHandler = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setFiltered(updatedItems);
    const deletedItem = items[index];
    let newCoin = Number(coin);
    if (deletedItem.diffValue === "Easy") {
      newCoin += 100;
    } else if (deletedItem.diffValue === "Medium") {
      newCoin += 200;
    } else if (deletedItem.diffValue === "Hard") {
      newCoin += 300;
    }
    setCoin(newCoin);
  };

  useEffect(() => {
    setItems(filtered);
  }, [filtered]);

  return (
    <div className="p-6 font-poetsen flex flex-col gap-6">
      {items &&
        items.map((item, index) => (
          <div
            key={index}
            className="border border-gray-400 bg-white bg-opacity-50 rounded-full px-4 py-4 flex items-center justify-around relative "
          >
            <div className="bg-gray-400 rounded-full text-white p-5 absolute left-0">
              {item.selectedIcon ? item.selectedIcon : <FaBookmark />}
            </div>
            <div className="ml-10">
              <h1>{item.quest}</h1>
            </div>
            <div className="text-red-400 flex items-center gap-1">
              <FaClock />
              <h1 className="text-">
                {" "}
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
              onClick={() => deleteHandler(index)}
            >
              <TiTick />
            </button>
          </div>
        ))}
    </div>
  );
};

export default Quests;
