import React from "react";
import { useQuestion } from "../../contexts/QuestionContext";
import Button from "../Button";
import styles from "./index.module.css";
const Question = () => {
  const { question, options } = useQuestion();
  return (
    <div className={styles.question}>
      <div className={styles.questionDiv}>
        <p className={styles.questionText}>{question} </p>
        <div className={styles.options}>
          {options && options.length
            ? Object.entries(options).map(([key, value]) => (
                <div key={key}>
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
