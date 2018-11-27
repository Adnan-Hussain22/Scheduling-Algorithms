import React, { Component } from "react";
import "./QueueContainer.css";
class App extends Component {
  constructor(props) {
    super();
    this.state = {
      processes: props.processes
    };
  }

  render() {
    const { processes } = this.state;
    console.log(`processes ${this.props.text}*****=>`, processes);
    return (
      <div className={"queue-container " + this.props.name}>
        <h3 style={{ textAlign: "center" }}>{this.props.text}</h3>
        <ul>
          {processes.length != 0 &&
            processes.map((value, index) => {
              return (
                <li key={index} className="process">
                  {value.processName}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default App;
