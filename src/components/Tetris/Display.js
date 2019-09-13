import React from 'react';
import { StyledDisplay } from '../styled/StyledDisplay';

const Display = ({gameOver, text}) => {
    return (
        <StyledDisplay>
            {text}
        </StyledDisplay>
    );
};

Display.propTypes = {};

export default Display;
