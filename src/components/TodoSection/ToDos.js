import React, { useState } from "react";
import ToDoNavBar from "./ToDoNavBar";
import ToDoContent from "./ToDoContent";
import ToDoFooter from "./ToDoFooter";
import AddItemProvider from "../../contexts/AddItemProvider";

const ToDos = () => {
  const [coin, setCoin] = useState(0);
  return (
    <div className="relative h-screen overflow-y-hidden">
      <div>
        <ToDoNavBar />
      </div>
      <div>
        <ToDoContent />
      </div>
      <div className="absolute bottom-0 z-10">
        <ToDoFooter />
      </div>
    </div>
  );
};

export default ToDos;
