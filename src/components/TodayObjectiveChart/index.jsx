import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import './TodayObjectiveChart.css';

const TodayObjectiveChart = ({ score }) => {
  const data = [
    { userScore: 1, fill: '#fbfbfb' },
    { userScore: score, fill: 'red' },
  ];
  return (
    <article className="today-objective-chart-container">
      <h2 className="score-title">Score</h2>
      <ResponsiveContainer width="100%" aspect={0.98}>
        <RadialBarChart
          data={data}
          barSize={8}
          outerRadius="110%"
          innerRadius="20%"
          startAngle={90}
          endAngle={450}
        >
          <RadialBar dataKey="userScore" cornerRadius={4} />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="score-text-container">
        <p className="score-quantity">{`${score * 100} %`}</p>
        <p className="score-text">de votre objectif</p>
      </div>
    </article>
  );
};

TodayObjectiveChart.prototype = {
  score: PropTypes.number,
};

export default TodayObjectiveChart;
