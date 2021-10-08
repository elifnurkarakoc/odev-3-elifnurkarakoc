import React from "react";
import { useQuestion } from "../../contexts/QuestionContext";
import Button from "../Button";

const Question = () => {
  const { question, options} = useQuestion();
  return (
    <div className="flex justify-around max-h-80 mt-10">
      <div className="p-8 text-left border w-80 rounded-xl ">
        <p className="text-2xl font-bold mb-4 ">
          {question}{" "}
        </p>
        <div className="flex flex-col items-center">
        {options && options.length
          ? Object.entries(options).map(([key, value]) => (
              <div className="" key={key}>
                <Button option={value} key={key} />
              </div>
            ))
          : null}
          </div>
      </div>
    </div>
  );
};

export default Question;
