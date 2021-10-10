import React from "react";

const Container = ({ children }) => {

  return (
    <div className="bg-black text-white">
      <div className="flex flex-col justify-between w-full h-full min-h-screen mx-auto max-w-3xl">
        {children}
      </div>
    </div>
  );
};

export default Container;
