import { createContext, useState, useContext } from "react";
import { useQuestion } from "./QuestionContext";
import { backgroundColor, borderColor } from "../constant/constant";
import { useEffect } from "react";
const ChartContext = createContext();

export const ChartProvider = ({ children }) => {
  const [barData, setBarData] = useState([]);
  const [pieData, setPieData] = useState([]);
  const { options } = useQuestion();

  useEffect(() => {
    updatePieChartData(pieData);
    updateBarChartData(barData);
  }, [options]);

  const updatePieChartData = () => {
    var data = [];
    Object.entries(options).map(([key, value]) =>
      data.push({
        title: value.text,
        value: value.count,
        color: backgroundColor[key],
      })
    );
    setPieData(data);
  };

  const updateBarChartData = () => {
    var chart = {
      labels: [],
      datasets: [
        {
          label: "# of Votes",
          data: [],
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderWidth: 1,
        },
      ],
    };
    var voteData = [];
    var labels = [];

    Object.entries(options).map(([key, value]) => {
      labels.push(value.text);
      voteData.push(value.count);
    });

    chart.labels = labels;
    chart.datasets[0].data = voteData;
    setBarData(chart);
  };

  const values = {
    barData,
    pieData,
    setBarData,
    updatePieChartData,
    updateBarChartData,
  };

  return (
    <ChartContext.Provider value={values}>{children}</ChartContext.Provider>
  );
};

export const useChart = () => useContext(ChartContext);
