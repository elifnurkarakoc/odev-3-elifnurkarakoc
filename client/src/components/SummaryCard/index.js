import React from "react";

const SummaryCard = ({text,count}) => {
  return (
    <div>
      <div className="relative group">
        <div className="transition group-hover:duration-200 duration-500 group-hover:opacity-100 opacity-75 absolute rounded-lg -inset-0.5 bg-gradient-to-r from-green-200 via-gray-400 to-green-200 filter blur"></div>
        <div className="bg-black relative items-center py-4 leading-none rounded-lg px-3 group-hover:text-green-200">
          <p className=" text-center mb-2 ">{text}</p>
          <p className=" text-center">{count} </p>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
