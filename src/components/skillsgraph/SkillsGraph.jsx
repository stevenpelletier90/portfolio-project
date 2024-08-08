import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Legend } from 'chart.js';
import styles from './SkillsGraph.module.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Legend);

const levelToValue = {
  Noobie: 1,
  Casual: 2,
  Enthusiast: 3,
  Pro: 4,
  Expert: 5,
  Wizard: 5,
};

const SkillsGraph = ({ skills, title = 'My Skills' }) => {
  const chartRef = useRef(null);
  const [chartSize, setChartSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        const containerWidth = chartRef.current.parentElement.offsetWidth;
        const containerHeight = chartRef.current.parentElement.offsetHeight;
        setChartSize({
          width: containerWidth,
          height: Math.max(300, containerHeight, containerWidth * 0.6),
        });
      }
    };

    handleResize(); // Initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const data = {
    labels: skills.map((skill) => skill.name),
    datasets: [
      {
        label: 'Skill Level',
        data: skills.map((skill) => levelToValue[skill.level]),
        backgroundColor: skills.map(() => `hsl(${Math.random() * 360}, 70%, 50%)`),
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: title,
        font: {
          size: chartSize.width < 500 ? 14 : 18,
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
        ticks: {
          stepSize: 1,
          callback: function (value) {
            return ['Noobie', 'Casual', 'Enthusiast', 'Pro', 'Expert'][value - 1] || '';
          },
          font: {
            size: chartSize.width < 500 ? 10 : 12,
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: chartSize.width < 500 ? 10 : 12,
          },
          maxRotation: 45,
          minRotation: 45,
        },
      },
    },
  };

  return (
    <div className={styles.skillsGraph} ref={chartRef} style={{ height: `${chartSize.height}px` }}>
      <Bar data={data} options={options} width={chartSize.width} height={chartSize.height} />
    </div>
  );
};

SkillsGraph.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      level: PropTypes.oneOf(['Noobie', 'Casual', 'Enthusiast', 'Pro', 'Expert', 'Wizard']).isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};

export default SkillsGraph;
