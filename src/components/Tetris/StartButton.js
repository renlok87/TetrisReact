import React from 'react';
import { StyledStartButton } from '../styled/StyledStartButton';

const StartButton = ({ callback }) => {
  return (
    <StyledStartButton onClick={callback}>
      Start Game
    </StyledStartButton>
  );
};

StartButton.propTypes = {};

export default StartButton;
