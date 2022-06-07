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
import './ActivityChart.css';

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value} Kg`}</p>
        <p className="label">{`${payload[1].value} Kcal`}</p>
      </div>
    );
  }
};

const xAxisFormatter = (tickItem) => {
  if (tickItem.length > 4) return parseInt(tickItem.split('-')[2]);
};

const ActivityChart = ({ data }) => {
  return (
    <ResponsiveContainer>
      <BarChart data={data} margin={{ top: 5, right: 0, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="2 2" vertical={false} />
        <XAxis
          dataKey="day"
          tickFormatter={xAxisFormatter}
          tickLine={false}
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
          wrapperStyle={{ top: -20 }}
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
  );
};

export default ActivityChart;
