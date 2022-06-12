import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import './TodayObjectiveChart.css';

const TodayObjectiveChart = ({ score }) => {
  const data = [
    { userScore: 1, fill: '#fbfbfb' },
    { userScore: score, fill: 'red' },
  ];
  return (
    <article className="today-objective-chart-container">
      <h2 className="score-title">Score</h2>
      <ResponsiveContainer>
        <RadialBarChart
          data={data}
          barSize={10}
          outerRadius="120%"
          innerRadius="20%"
          startAngle={90}
          endAngle={450}
        >
          <RadialBar dataKey="userScore" cornerRadius={5} />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="score-text-container">
        <p className="score-quantity">{`${score * 100} %`}</p>
        <p className="score-text">de votre objectif</p>
      </div>
    </article>
  );
};

export default TodayObjectiveChart;
