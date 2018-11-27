import React, { Component } from "react";
import { SplashScreen, AlgoSelection, Dashboard } from "./Screens";
class App extends Component {
  constructor(props) {
    super();
    this.state = {
      processes: null,
      step: 1,
      algoType:null,
      algoName:null
    };
  }

  inputProcesses = processes => {
    this.setState({ processes });
  };

  handleNextStep = () => {
    console.log("handleNextStep");
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  handleInputProcesses = (algoType,algoName, processes) => {
    const { step } = this.state;
    console.log("handleInputProcesses=>", algoType, processes);
    this.setState({ processes, algoType,algoName, step: step + 1 });
  };

  render() {
    const { step } = this.state;
    return (
      <div className="App">
        {this.renderSteps(step)}
      </div>
    );
  }

  renderSteps = step => {
    switch (step) {
      case 1: {
        return <SplashScreen handleNextStep={this.handleNextStep} />;
      }
      // step two select the algo type input processes
      case 2: {
        return (
          <AlgoSelection
            handleInputProcesses={this.handleInputProcesses}
          />
        );
      }
      case 3: {
        return (
          <Dashboard
            processes={this.state.processes}
            algoType={this.state.algoType}
            algoName={this.state.algoName}
          />
        );
      }
    }
  };
}

export default App;
