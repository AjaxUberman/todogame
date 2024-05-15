import React, { useEffect, useState } from "react";
import logoMoney from "../../images/coinsvart-01.png";
import football from "../../images/Football Player in Game.png";
import games from "../../images/Streaming_games (1x).png";
import offday from "../../images/4400_10-09.png";
import { useAddItemContext } from "../../contexts/AddItemProvider";

const ContentCards = () => {
  const [buyActive, setBuyActive] = useState(false);
  const [purchase, setPurchase] = useState("");
  const [coinValue, setCoinValue] = useState(
    parseInt(localStorage.getItem("coin"))
  );
  const { setCoin } = useAddItemContext();

  const buyHandler = (value, money) => {
    setBuyActive(true);
    setPurchase(value);
    setCoinValue(parseInt(localStorage.getItem("coin")) - money);
    /* TimeFunc */
    setTimeout(() => {
      setBuyActive(false);
    }, 3000);
  };

  useEffect(() => {
    localStorage.setItem("coin", coinValue);
    setCoin(coinValue);
  }, [coinValue]);

  console.log(coinValue);

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2 ">
      {buyActive ? (
        <div className="absolute bg-black opacity-65 inset-0 z-40"></div>
      ) : (
        ""
      )}
      <div className="border border-gray-400 bg-white rounded-md w-36 h-52 relative flex flex-col items-center">
        <img alt="" src={games} className="h-20 mt-8" />
        <h1 className="text-gray-text absolute bottom-14 tracking-wider">
          30 Min. Break
        </h1>
        <button
          className={`flex items-center py-2 px-4 rounded-full text-white gap-2 absolute bottom-2 hover:scale-110 transition duration-100 ease-in bg-green-400 ${
            (isNaN(coinValue) || coinValue < 200) && "bg-red-400"
          }`}
          onClick={() => buyHandler("30 Min. Break", 200)}
          disabled={isNaN(coinValue) || coinValue < 200}
        >
          <img src={logoMoney} alt="logomoney" className="w-4 h-4" />
          <h1>200</h1>
        </button>
      </div>
      <div className="border border-gray-400 bg-white rounded-md w-36 h-52 relative flex flex-col items-center">
        <img alt="" src={football} className="h-20 mt-8" />
        <h1 className="text-gray-text absolute bottom-14 tracking-wider">
          1 Hour Break
        </h1>
        <button
          className={`flex items-center py-2 px-4 rounded-full text-white gap-2 absolute bottom-2 hover:scale-110 transition duration-100 ease-in bg-green-400 ${
            (isNaN(coinValue) || coinValue < 400) && "bg-red-400"
          }`}
          onClick={() => buyHandler("1 Hour Break", 400)}
          disabled={isNaN(coinValue) || coinValue < 400}
        >
          <img src={logoMoney} alt="logomoney" className="w-4 h-4" />
          <h1>400</h1>
        </button>
      </div>
      <div className="border border-gray-400 bg-white rounded-md w-36 h-52 relative flex flex-col items-center">
        <img alt="" src={offday} className="h-20 mt-8" />
        <h1 className="text-gray-text absolute bottom-14 tracking-wider">
          Off Day
        </h1>
        <button
          className={`flex items-center py-2 px-4 rounded-full text-white gap-2 absolute bottom-2 hover:scale-110 transition duration-100 ease-in bg-green-400 ${
            (isNaN(coinValue) || coinValue < 1400) && "bg-red-400"
          }`}
          onClick={() => buyHandler("Off Day", 1400)}
          disabled={isNaN(coinValue) || coinValue < 1400}
        >
          <img src={logoMoney} alt="logomoney" className="w-4 h-4" />
          <h1>1400</h1>
        </button>
      </div>
      {buyActive ? (
        <div className="border border-gray-400 w-60 h-40 bg-white rounded-md flex items-center justify-center text-center z-50 absolute right-20 top-80">
          <h1>
            Purchase complated. Enjoy your
            <span className="text-red-400"> {purchase}</span>!
          </h1>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ContentCards;
