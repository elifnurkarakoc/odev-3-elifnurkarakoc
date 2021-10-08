import React from "react";
import { useQuestion } from "../../contexts/QuestionContext";
import SummaryCard from "../SummaryCard";
const Summary = () => {
  const { options, totalCount } = useQuestion();
  return (
    <div className="flex justify-between text-2xl font-bold p-6 ">
      <SummaryCard text={"Total Vote"} count={totalCount} />
      {options && options.length
        ? Object.entries(options).map(([key, value]) => (
            <SummaryCard key={key} text={value.text} count={value.count} />
          ))
        : null}
    </div>
  );
};

export default Summary;
