import React from "react";
import ToDoNavBar from "../TodoSection/ToDoNavBar";
import ToDoFooter from "../TodoSection/ToDoFooter";
import BuyContent from "./BuyContent";

const BuyMain = () => {
  return (
    <div className="relative h-screen overflow-y-hidden">
      <div>
        <ToDoNavBar />
      </div>
      <div>
        <BuyContent />
      </div>
      <div className="absolute bottom-0">
        <ToDoFooter />
      </div>
    </div>
  );
};

export default BuyMain;
