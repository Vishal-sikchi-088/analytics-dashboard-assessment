import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const Chart = ({ data, xKey, yKey }) => {
  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey={xKey} />
      <YAxis />
      <Tooltip />
      <Bar dataKey={yKey} fill="#8884d8" />
    </BarChart>
  );
};

export default Chart;
