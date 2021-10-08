import React from "react";
import { useChart } from "../../contexts/ChartContext";
import { defaultLabelStyle } from "../../constant/constant";
import { PieChart } from "react-minimal-pie-chart";
import { Bar } from "react-chartjs-2";

const Chart = () => {
  const { barData, pieData } = useChart();

  return (
    <div className=" p-4 flex flex-col items-center ">
      <div className="flex mb-4 relative group">
        <div className="transition group-hover:duration-200  duration-500 group-hover:opacity-100 opacity-60 absolute rounded-full -inset-0.5 bg-gradient-to-r from-green-600 via-gray-400 to-green-600 filter blur"></div>
        <div className=" relative items-center h-48 w-48">
          <PieChart
            data={pieData}
            labelStyle={defaultLabelStyle}
            label={({ dataEntry }) => Math.round(dataEntry.percentage) + "%"}
          />
        </div>
      </div>
      <div className="flex mt-4">
        <Bar data={barData} />
      </div>
    </div>
  );
};

export default Chart;
