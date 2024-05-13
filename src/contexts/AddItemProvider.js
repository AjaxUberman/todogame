import React, { createContext, useContext, useState } from "react";

const AddItemContext = createContext();

export const useAddItemContext = () => {
  return useContext(AddItemContext);
};

const AddItemProvider = ({ children }) => {
  const [difficultActive, setDifficultActive] = useState(false);
  const [diffValue, setDiffValue] = useState("Easy");
  const [quest, setQuest] = useState("");
  const [iconActive, setIconActive] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [timeActive, setTimeActive] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [savedData, setSavedData] = useState(null);
  const [menuActive, setMenuActive] = useState(false);
  const [items, setItems] = useState([]);
  const [coin, setCoin] = useState("000");

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
  };

  return (
    <AddItemContext.Provider value={contextValue}>
      {children}
    </AddItemContext.Provider>
  );
};

export default AddItemProvider;
