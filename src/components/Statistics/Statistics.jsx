import PropTypes from 'prop-types';
import getRandomHexColor from '../../utils/randomRadialGradient';
import {
  Label,
  Percentage,
  StatisticsWrapper,
  StatList,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatisticsWrapper>
      {title && <h2>{title}</h2>}
      <StatList>
        {stats.map(item => {
          const bgColor = getRandomHexColor();
          return (
            <li
              key={item.id}
              style={{
                background: `${bgColor}`,
              }}
            >
              <Label>{item.label}</Label>
              <Percentage>{item.percentage}%</Percentage>
            </li>
          );
        })}
      </StatList>
    </StatisticsWrapper>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
