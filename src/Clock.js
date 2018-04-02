import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
      //color: this.getRandomColor()
    };
    setInterval(
      () =>
        this.setState({
          time: new Date().toLocaleTimeString()
          //color: this.getRandomColor()
        }),
      1000
    );
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomColor() {
    var element = document.getElementById("box");
    //generate random red, green and blue intensity
    var r = this.getRandomInt(0, 255);
    var g = this.getRandomInt(0, 255);
    var b = this.getRandomInt(0, 255);
    return `rgb(${r},${g},${b})`;
  }

  render() {
    return (
      <h3 className="time" style={{ color: this.state.color }}>
        {this.state.time}
      </h3>
    );
  }
}

export default Clock;
