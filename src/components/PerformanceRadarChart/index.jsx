import {
  RadarChart,
  PolarAngleAxis,
  PolarGrid,
  ResponsiveContainer,
  Radar,
  PolarRadiusAxis,
} from 'recharts';
import './PerformanceRadarChart.css';

const PerformanceRadarChart = ({ data, kind }) => {
  const angleAxisFormatter = (tick) => {
    //const activities = Object.values(kind).reverse();
    const activities = [
      'Cardio',
      'Energie',
      'Endurance',
      'Force',
      'Vitesse',
      'Intensité',
    ];

    return activities[tick - 1];
  };

  return (
    <article className="performance-chart-container">
      <ResponsiveContainer width="100%" aspect={0.98}>
        <RadarChart
          data={data}
          margin={{ top: 0, right: 50, bottom: 0, left: 50 }}
          cx="47%"
        >
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kind"
            tickLine={{ fill: '#282D30' }}
            tick={{ fill: 'white', fontSize: 12, fontWeight: 500 }}
            tickFormatter={angleAxisFormatter}
          />
          <PolarRadiusAxis
            domain={[0, 250]}
            tickCount={6}
            axisLine={false}
            tick={false}
          />
          <Radar dataKey="value" fill="red" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </article>
  );
};

export default PerformanceRadarChart;
