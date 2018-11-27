import React from "react";
import './input.css';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      processes:''
    };
  }

  onSubmit = (e)=>{
    e.preventDefault();
    const {processes} = this.state;
    if(Number(processes)){
      this.props.inputProcesses(processes);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="input-process">
            <input
              type="text"
              className="form-control"
              name="processes"
              placeholder="Please enter number of processes"
              onChange={(e)=>{this.setState({processes:e.target.value})}}
            />
            <button type="submit" className="btn btn-info">Start</button>
          </div>
        </form>
      </div>
    );
  }
}
