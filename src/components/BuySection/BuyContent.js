import React from "react";
import ContentCards from "./ContentCards";

const BuyContent = () => {
  return (
    <div className="bg-buy-content-bg h-screen font-poetsen flex flex-col items-center">
      <div className="py-10">
        <h1 className="text-3xl tracking-wider border-b border-red-400 pb-2 text-red-400">
          Buy Items
        </h1>
      </div>
      <div>
        <ContentCards />
      </div>
    </div>
  );
};

export default BuyContent;
