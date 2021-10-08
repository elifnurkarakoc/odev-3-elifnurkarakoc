import React from "react";
import { useQuestion } from "../../contexts/QuestionContext";
import { useSocket } from "../../contexts/SocketContext";

const Button = ({ option }) => {
  const { options, setOptions} = useQuestion();
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
    //console.log("send");
    setOptions(updateOptions);
    // console.log("options", { options });
  };

  return (
    <div className="flex justify-between text-center">
      <div className="flex">
        <button
          className="border  w-56 h-12 rounded-xl bg-black hover:border-green-400 mt-4 text-xl  hover:text-green-400"
          onClick={(e) => clickVote(e, option)}
        >
          {option.text}
        </button>
      </div>
    </div>
  );
};

export default Button;
