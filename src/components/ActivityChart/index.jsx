import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
import './ActivityChart.css';

/**
 * Custom tooltip formatter
 *
 * @param {boolean} active - whether the tooltip is hovered or not
 * @param {[string]} payload - The array of data
 * @returns {JSX} The tooltip.
 */
const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value} Kg`}</p>
        <p className="label">{`${payload[1].value} Kcal`}</p>
      </div>
    );
  }

  return null;
};

/**
 * Custom X axis formatter
 *
 * @param {string} tickItem - The day of the month
 * @returns {number} The number of the day.
 */
const xAxisFormatter = (tickItem) => {
  if (tickItem.length > 4) return parseInt(tickItem.split('-')[2]);
};

/**
 * Legend style formatter
 *
 * @returns {JSX} The legend.
 */
const renderColorfulLegendText = (value) => {
  return (
    <span style={{ color: '#74798c', marginLeft: 8, marginRight: 20 }}>
      {value}
    </span>
  );
};

/**
 * Component that returns a chart from daily activities data
 *
 * @component
 * @param {[object]} data - The daily activities data
 * @returns {JSX} The React component.
 */
const ActivityChart = ({ data }) => {
  return (
    <article className="activity-chart-container">
      <p className="activity-chart-title">Activité quotidienne</p>
      <ResponsiveContainer width="100%" aspect={2.6}>
        <BarChart
          data={data}
          margin={{ top: 80, right: 5, left: 27, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <XAxis
            dataKey="day"
            tickFormatter={xAxisFormatter}
            tickLine={false}
            fontSize={14}
            fontWeight={500}
            color="#9b9eac"
            dy={10}
          />
          <YAxis
            dataKey="kilogram"
            orientation="right"
            tickCount={3}
            domain={['dataMin - 1', 'auto']}
            yAxisId="right"
            axisLine={false}
            tickLine={false}
            fontSize={14}
            fontWeight={500}
            color="#9b9eac"
            dx={10}
          />
          <YAxis
            dataKey="calories"
            orientation="left"
            yAxisId="left"
            hide={true}
          />
          <Tooltip
            content={<CustomTooltip />}
            contentStyle={{ backgroundColor: 'red' }}
            labelStyle={{ display: 'none' }}
            itemStyle={{ color: 'white' }}
          />
          <Legend
            align="right"
            verticalAlign="top"
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ top: 30 }}
            formatter={renderColorfulLegendText}
          />
          <Bar
            dataKey="kilogram"
            name="Poids (Kg)"
            fill="#282d30"
            radius={4}
            barSize={8}
            yAxisId="right"
          />
          <Bar
            dataKey="calories"
            name="Calories brûlées (kCal)"
            fill="#ff0000"
            radius={4}
            barSize={8}
            yAxisId="left"
          />
        </BarChart>
      </ResponsiveContainer>
    </article>
  );
};

ActivityChart.prototype = {
  data: PropTypes.array,
};

export default ActivityChart;
