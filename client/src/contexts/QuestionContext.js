import { createContext, useContext, useEffect, useState } from "react";
import { questionVotesList } from "../constant/constant";

const QuestionContext = createContext();

let tempCount = 0;
let temp = questionVotesList[1].question;

export const QuestionProvider = ({ children }) => {
  const [question, setQuestion] = useState(temp);
  const [options, setOptions] = useState([]); 
  const [totalCount, setTotalCount] = useState(tempCount);

  
  useEffect(() => {
    Object.entries(options).map(
      ([key, value]) => (tempCount += Number(value.count))
    );
    setTotalCount(tempCount);
    tempCount = 0;
   // setOptions(options);
  }, [options]);

  const values = {
    question,
    setQuestion,
    options,
    setOptions,
    totalCount,
    setTotalCount,
  };

  return (
    <QuestionContext.Provider value={values}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestion = () => useContext(QuestionContext);
