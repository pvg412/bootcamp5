import React, {Component} from 'react';
import Button from './button';
import RenderIf from './common/renderif';
import './timer.css';

class Timer extends Component{
    state = {
        time: 60,
        isStarted: false,
        progressBar: 100
    };

    timerId = null;

    get timerValues(){
        let min = Math.floor(this.state.time / 60);
        let sec = this.state.time % 60;
        min = min < 10 ? '0' + min : min;
        sec = sec < 10 ? '0' + sec : sec;
        return {
            min: min,
            sec: sec
        }
    };

    startHandler = () => {
        if (this.timerId) {
            return
        }
        this.setState({
            time: 60,
            progressBar: 100,
            isStarted: true
        });
        this.timerId = setInterval(() => {
            if (this.state.time === 0) {
                this.stopHandler();
                return
            }
            this.setState((prevState) => {
                return {
                    time: prevState.time - 1,
                    progressBar: prevState.progressBar - (prevState.progressBar/prevState.time)
                }
            })
        }, 10)
    };

    stopHandler = () => {
        clearInterval(this.timerId);
        this.timerId = null;
        this.setState({
            isStarted:false
        })
    };

    resetHandle = () => {
      this.setState({
          time: 0
      })
    };

    render(){
        return(
            <div className='wrapper'>
                <h3 className='clock'>{this.timerValues.min}:{this.timerValues.sec}</h3>
                <Button isStarted={this.state.isStarted}
                        startHandler={this.startHandler}
                        stopHandler={this.stopHandler}
                />
                <RenderIf condition={this.state.isStarted}>
                    5 > 3
                </RenderIf>
                <div className='progressBar'
                     style={{width: this.state.progressBar + '%'}}>

                </div>
            </div>
        )
    }
}

export default Timer;