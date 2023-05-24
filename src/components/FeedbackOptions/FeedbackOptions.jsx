import React from 'react';
import PropTypes from 'prop-types';
import {
  MinorContainer,
  FeedbackOptions,
  Button,
  Title,
} from './FeedbackOptions.styled';

const FeedbackOptionsButton = ({ handleGood, handleNeutral, handleBad }) => {
  return (
    <FeedbackOptions>
      <Title>Please leave feedback</Title>
      <MinorContainer>
        <Button onClick={handleGood}>Good</Button>
        <Button onClick={handleNeutral}>Neutral</Button>
        <Button onClick={handleBad}>Bad</Button>
      </MinorContainer>
    </FeedbackOptions>
  );
};

FeedbackOptionsButton.propTypes = {
  handleGood: PropTypes.func.isRequired,
  handleNeutral: PropTypes.func.isRequired,
  handleBad: PropTypes.func.isRequired,
};

export default FeedbackOptionsButton;
