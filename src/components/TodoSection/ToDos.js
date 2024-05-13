import React from "react";
import ToDoNavBar from "./ToDoNavBar";
import ToDoContent from "./ToDoContent";
import ToDoFooter from "./ToDoFooter";
const ToDos = () => {
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
