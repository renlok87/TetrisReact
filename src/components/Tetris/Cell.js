import React from 'react';
import { StyledCell } from '../styled/StyledSell';
import { TETRISFIG } from './tetrominus';


const Cell = ({ type }) => {

  return (
    <StyledCell type={type} color={TETRISFIG[type].color} >
      {console.log('render')}
    </StyledCell>
  );
};

Cell.propTypes = {};

export default React.memo(Cell);
