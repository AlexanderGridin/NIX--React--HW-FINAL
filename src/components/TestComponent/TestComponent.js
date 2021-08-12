import { useEffect, useState } from "react";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { getTotalPopultaionData } from "../../lib/datausaIoApi";
import { CHART_BARS_COLORS } from "../../constants/chartBarsColors";

import styles from "./TestComponent.module.css";

const TestComponent = () => {
  const [populationData, setPopulationData] = useState(null);

  useEffect(() => {
    getTotalPopultaionData().then((populationData) => {
      setPopulationData(populationData.data.reverse());
      console.log(populationData.data);
    });
  }, []);

  return (
    <div>
      <h1>Population data</h1>
      {populationData && (
        <div className={styles.Chart}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={populationData}
              margin={{
                top: 5,
                right: 5,
                left: 40,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Year" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Population">
                {populationData.map((dataObj, index) => (
                  <Cell key={`cell-${index}`} fill={CHART_BARS_COLORS[index]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default TestComponent;
