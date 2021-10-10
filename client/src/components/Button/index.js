import React from "react";
import { useQuestion } from "../../contexts/QuestionContext";
import { useSocket } from "../../contexts/SocketContext";
import styles from "./index.module.css";

const Button = ({ option }) => {
  const { options, setOptions } = useQuestion();
  const { sendVote } = useSocket();

  const clickVote = (e, value) => {
    e.preventDefault();
    let tmp = options;
    let updateOptions = tmp.map((o) => {
      if (o.id === value.id) {
        return { ...o, count: Number(o.count) + 1 };
      }
      return o;
    });
    sendVote("vote", updateOptions);
    setOptions(updateOptions);
  };

  return (
    <div className={styles.div}>
      <div className={styles.buttonDiv}>
        <button className={styles.button} onClick={(e) => clickVote(e, option)}>
          {option.text}
        </button>
      </div>
    </div>
  );
};

export default Button;
