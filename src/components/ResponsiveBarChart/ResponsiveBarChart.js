import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { CHART_BARS_COLORS } from "../../constants/chartBarsColors";

import styles from "./ResponsiveBarChart.module.css";

const ResponsiveBarChart = ({
  title = " ",
  data,
  XAxisDataKey,
  barDataKey,
}) => {
  return (
    <div>
      {
        <>
          {data && (
            <div className={styles.ResponsiveBarChartWrapper}>
              <h2>{title}</h2>
              <div className={styles.ResponsiveBarChartContent}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={data}
                    margin={{
                      top: 5,
                      right: 5,
                      left: 40,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid />
                    <XAxis dataKey={XAxisDataKey} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey={barDataKey}>
                      {data.map((dataItem, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={CHART_BARS_COLORS[index]}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </>
      }
    </div>
  );
};

export default ResponsiveBarChart;
