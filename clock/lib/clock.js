import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      hours: '',
      minutes: '',
      seconds: '',
      ampm: ''
    };
  }

  componentDidMount() {
    this.getTime();
    setInterval(() => {
      this.getTime();
    }, 1000);
  }

  getTime() {
    let time = new Date(Date.now());
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let ampm;

    if (hours > 12) {
      hours = hours - 12;
      ampm = 'PM';
    } else {
      ampm = 'AM';
    }

    minutes = minutes.toString().length < 2 ? '0' + minutes.toString() : minutes.toString();
    seconds = seconds.toString().length < 2 ? '0' + seconds.toString() : seconds.toString();

    this.setState({
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      ampm: ampm
    });
  }

  render () {
    return (
      <h1>{this.state.hours}:{this.state.minutes}:{this.state.seconds} {this.state.ampm}</h1>
    );
  }
}

export default Clock;
