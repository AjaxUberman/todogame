import React, { createContext, useContext, useState } from "react";
import { FaBook } from "react-icons/fa6";

const AddItemContext = createContext();

export const useAddItemContext = () => {
  return useContext(AddItemContext);
};

const AddItemProvider = ({ children }) => {
  const [difficultActive, setDifficultActive] = useState(false);
  const [diffValue, setDiffValue] = useState("Easy");
  const [quest, setQuest] = useState("");
  const [iconActive, setIconActive] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState("FaBook");
  const [timeActive, setTimeActive] = useState(false);
  const [selectedTime, setSelectedTime] = useState(50);
  const [savedData, setSavedData] = useState(null);
  const [menuActive, setMenuActive] = useState(false);
  const [items, setItems] = useState([]);
  const [coin, setCoin] = useState(0);
  const [render, setRender] = useState(false);

  const diffHandler = (diffValue) => {
    setDiffValue(diffValue);
    setDifficultActive(false);
  };

  const saveHandler = () => {
    const data = {
      quest: quest,
      selectedIcon: selectedIcon,
      selectedTime: selectedTime,
      diffValue: diffValue,
    };
    setSavedData(data);
    setItems([...items, data]);
    setMenuActive(false);
    setQuest("");
  };

  const contextValue = {
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
    setDiffValue,
    difficultActive,
    setDifficultActive,
    diffHandler,
    saveHandler,
    savedData,
    menuActive,
    setMenuActive,
    items,
    setItems,
    coin,
    setCoin,
    render,
    setRender,
  };

  return (
    <AddItemContext.Provider value={contextValue}>
      {children}
    </AddItemContext.Provider>
  );
};

export default AddItemProvider;
