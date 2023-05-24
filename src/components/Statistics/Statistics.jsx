import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsCount, StatisticsTitle } from './Statistics.styled';

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <div>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <StatisticsCount>Good: {good}</StatisticsCount>
      <StatisticsCount>Neutral: {neutral}</StatisticsCount>
      <StatisticsCount>Bad: {bad}</StatisticsCount>
      <StatisticsCount>Total: {total()}</StatisticsCount>
      <StatisticsCount>
        Positive Feedback: {positivePercentage()}%
      </StatisticsCount>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
