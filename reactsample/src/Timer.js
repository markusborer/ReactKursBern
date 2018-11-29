import React from 'react';

class Timer extends React.Component {

    render() {
        return (
            <div>{new Date().toLocaleTimeString()}</div>
        )
    }

}

export default Timer;
