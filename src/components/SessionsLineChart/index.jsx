import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import './SessionsLineChart.css';

const xAxisFormatter = (tick) => {
  const dayNames = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  return dayNames[tick - 1];
};

const CustomCursor = ({ points }) => {
  return (
    <rect
      x={points[0].x}
      y="0"
      height="100%"
      width="100%"
      fill="black"
      opacity={0.1}
    ></rect>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

const SessionsChartTitle = () => {
  return <p className="sessions-chart-title">Durée moyenne des sessions</p>;
};

const SessionsLineChart = ({ data }) => {
  return (
    <article className="sessions-chart-container">
      <SessionsChartTitle />
      <ResponsiveContainer width="100%" height={263}>
        <AreaChart
          data={data}
          margin={{ top: 0, right: 20, left: 20, bottom: -30 }}
        >
          <defs>
            <linearGradient id="areachart" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffffff" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="natural"
            dataKey="sessionLength"
            stroke="#ffffff"
            strokeWidth={4}
            strokeOpacity={0.4}
            fill="url(#areachart)"
            fillOpacity={1}
            activeDot={{ r: 8, strokeWidth: 18, strokeOpacity: 0.3 }}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickFormatter={xAxisFormatter}
            interval="preserveStartEnd"
            dy={-50}
            tick={{ fill: 'white', opacity: 0.4 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            hide={true}
            domain={['dataMin -40', 'dataMax + 40']}
          />
          <Tooltip
            content={<CustomTooltip />}
            itemStyle={{ color: 'black' }}
            cursor={<CustomCursor />}
          />
        </AreaChart>
      </ResponsiveContainer>
    </article>
  );
};

export default SessionsLineChart;
