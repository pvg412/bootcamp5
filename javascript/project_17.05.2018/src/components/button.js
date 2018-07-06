import React from 'react';
import PropTypes from 'prop-types';


const Button = ({started, startHandler, stopHandler}) => {
    const start = <button className='btn' onClick={startHandler}>start</button>;
    const stop = <button className='btn' onClick={stopHandler}>pause</button>;
    return started ? stop : start
};

Button.propTypes = {
    isStarted: PropTypes.bool.isRequired,
    startHandler: PropTypes.func.isRequried,
    stopHandler: PropTypes.func.isRequired
};

export default Button;
