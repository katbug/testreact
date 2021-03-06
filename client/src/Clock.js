import React, { Component } from 'react';
import AnxietyItem from './AnxietyItem.js'
import './App.css';
import './timeline.css';
import 'font-awesome/css/font-awesome.css';


class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = this.getTime();
    }

    componentDidMount() {
        this.setTimer();
    }

    componentWillUnmount() {
        if(this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    getTime() {
        const currentTime = new Date();
        return {
            hours: currentTime.getHours(),
                minutes: currentTime.getMinutes(),
                seconds: currentTime.getSeconds(),
                ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
        }
    }

    setTimer() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.updateClock.bind(this), 1000);
    }

    updateClock() {
        const currentTime = new Date();
        this.setState({
            currentTime: currentTime, 
        }, this.setTimer);
    }

    render() {
        const {hours, minutes, seconds, ampm} = this.state; 
        return (
                <div className="clock">
                {
                    hours == 0 ? 12 :
            (hours > 12) ?
            hours - 12 : hours
                }:{
                    minutes > 9 ? minutes : `0${minutes}`
                }:{
                    seconds > 9 ? seconds : `0${seconds}`
                } {ampm}
                </div>
               );
    }
}

export default Clock;
