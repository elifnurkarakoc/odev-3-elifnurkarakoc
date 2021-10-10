import React from "react";
import { useQuestion } from "../../contexts/QuestionContext";
import SummaryCard from "../SummaryCard";
import styles from "./index.module.css";
const Summary = () => {
  const { options, totalCount } = useQuestion();
  return (
    <div className={styles.card}>
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
