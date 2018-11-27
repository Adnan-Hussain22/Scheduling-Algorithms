import React from "react";
import { Modal, Button, Input } from "antd";
import "antd/dist/antd.css";
import "./algoSelection.css";
import $ from "jquery";
const Search = Input.Search;
class InterruptSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prosessModel: false,
      processes: 0,
      algoType: null
    };
  }

  componentDidMount() {
    this.handleStartAnimation();
  }

  handleStartAnimation = () => {
    setTimeout(() => {
      const header = document.getElementById("interruptHeader");
      header.style = "margin-top:0px";
    }, 800);
    setTimeout(() => {
      const header = document.getElementById("interruptHeader");
      this.handleAnimateHeader(header);
    }, 2500);
  };

  handleAnimateHeader = header => {
    header.style = "height: 60px; margin-top:0px";
    header.classList.add("animationEnd");
  };
 
  handleAlgoSelection = type => {
    switch (type) {
      case "Shortest Job First": {
        this.setState({
          prosessModel: true,
          algoType: 1,
          algoName:'Shortest Job First'
        });
        break;
      }
      case "Shortest Remaining Time First": {
        this.setState({
          prosessModel: true,
          algoType: 2,
          algoName: "Shortest Remaining Time First"
        });
        break;
      }
      default: {
        return;
      }
    }
  };

  handleProcessesSelected = () => {
    const { processes, algoType,algoName } = this.state;
    if (algoType && processes) {
      this.props.handleInputProcesses(algoType,algoName,processes);
    }
  };

  handleProcessesInputChange = e => {
    const number = Number(e.target.value);
    if (number && number != NaN) {
      this.setState({ processes: number });
    } else {
      this.setState({ processes: "" });
    }
  };

  render() {
    const { prosessModel } = this.state;
    return (
      <div>
        {this.renderAlgoSelection()}
        {prosessModel && this.renderProcessModel()}
      </div>
    );
  }

  renderAlgoSelection = () => {
    return (
      <div className="interrrupt-selection">
        {this.renderHeader()}
        {this.renderMainContent()}
      </div>
    );
  };

  renderHeader = () => {
    return (
      <div className="header" id="interruptHeader">
        <h3 style={{color:'white',fontWeight:"800"}}>SCHEDULING ALOGORITHMS</h3>
      </div>
    );
  };

  renderMainContent = () => {
    return (
      <div className="selection">
        <div className="interrupt-type">
          <span style={{ fontWeight: "900" }}>SELECT</span> ALOGORITHM TYPE
        </div>
        <div className="border-vertical" />
        <div className="border-container" />
        <div className="interrupt-options">
          <div
            className="software-interrupt"
            onClick={() => {
              this.handleAlgoSelection("Shortest Job First");
            }}
          >
            Shortest Job First
          </div>
          <div
            className="hardware-interrupt"
            onClick={() => {
              this.handleAlgoSelection("Shortest Remaining Time First");
            }}
          >
            Shortest Remaining Time First
          </div>
        </div>
      </div>
    );
  };

  renderProcessModel = () => {
    const { prosessModel, processes } = this.state;
    return (
      <div className="process-model" id="processModal">
        {/* <input
              placeholder="processes..."
              onChange={this.handleProcessesInputChange}
            /> */}
        <Modal
          className="process-model"
          visible={prosessModel}
          title="Title"
          onOk={() => {
            this.setState({ prosessModel: false });
          }}
          onCancel={() => {
            this.setState({ prosessModel: false });
          }}
          footer={null}
        >
          <h4 style={{ textAlign: "center", color: "red" }}>
            ENTER NUMBER OF PROCESSES
          </h4>
          <div className="process-container">
            <div className="input-processes">
              <input
                placeholder="processes.."
                onChange={this.handleProcessesInputChange}
                value={processes}
              />
            </div>
            <button onClick={this.handleProcessesSelected}>GO</button>
          </div>
        </Modal>
      </div>
    );
  };
}

export default InterruptSelection;
