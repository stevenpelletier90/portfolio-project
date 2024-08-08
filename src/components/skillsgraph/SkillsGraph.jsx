import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './SkillsGraph.module.css';

const data = [
  { name: 'Singing', value: 90, fill: 'url(#gradientSinging)' },
  { name: 'Web Development', value: 90, fill: 'url(#gradientWebDev)' },
  { name: 'Cooking', value: 70, fill: 'url(#gradientCooking)' },
  { name: 'Surfing', value: 60, fill: 'url(#gradientSurfing)' },
  { name: 'Bouldering', value: 40, fill: 'url(#gradientBouldering)' },
];

const levels = ['Novice', 'Intermediate', 'Advanced', 'Expert', 'Master'];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const level = levels[Math.floor((payload[0].value - 1) / 20)];
    return (
      <div className={styles.customTooltip}>
        <p>{`${label}: ${payload[0].value}%`}</p>
        <p>{`Level: ${level}`}</p>
      </div>
    );
  }
  return null;
};

const SkillsGraph = () => {
  return (
    <div className={styles.skillsGraph}>
      <h2>My Skills</h2>
      <ResponsiveContainer width='100%' height={400}>
        <BarChart data={data} layout='vertical' margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis type='number' domain={[0, 100]} />
          <YAxis dataKey='name' type='category' />
          <Tooltip content={<CustomTooltip />} />
          <defs>
            {data.map((entry, index) => (
              <linearGradient
                key={`gradient-${entry.name}`}
                id={`gradient${entry.name.replace(/\s+/g, '')}`}
                x1='0'
                y1='0'
                x2='1'
                y2='0'
              >
                <animate attributeName='x1' values='0;1;0' dur='10s' repeatCount='indefinite' />
                <animate attributeName='x2' values='1;0;1' dur='10s' repeatCount='indefinite' />
                <stop offset='0%' stopColor={`hsl(${index * 60}, 70%, 50%)`} />
                <stop offset='100%' stopColor={`hsl(${index * 60 + 30}, 70%, 50%)`} />
              </linearGradient>
            ))}
          </defs>
          <Bar dataKey='value' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  label: PropTypes.string,
};

export default SkillsGraph;
