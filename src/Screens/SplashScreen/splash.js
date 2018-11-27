import React from "react";
import "./splash.css";
import $ from "jquery";
class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleLoaderContainer = () => {
    setTimeout(() => {
      const loaderContainer = document.getElementById("loaderContainer");
      loaderContainer.style = "border:2px solid red";
      $("#loaderContainer").animate({ width: "300", height: "90" });
      this.handleStartLoader();
    }, 200);
  };

  handleStartLoader = () => {
    let width = 1;
    const loader = document.getElementById("loader");
    const startButton = document.getElementById("btnStart");
    const interval = setInterval(() => {
      if (width <= 100) {
        width += 1;
        loader.style = `width:${width}%`;
      } else {
        clearInterval(interval);
        startButton.style = 'visibility:visible;'
      }
    }, 20);
  };

  render() {
    return (
      <div className="splashScreen-Container">
        <div className="splash-screen">
          {this.renderLoaderContainer()}
          <button
            className="btn-start"
            id="btnStart"
            onClick={this.props.handleNextStep}
          >
            Start
          </button>
        </div>
      </div>
    );
  }

  renderLoaderContainer = () => {
    this.handleLoaderContainer();
    return (
      <div className="loader-container" id="loaderContainer">
        {this.renderLoader()}
        <p>LOADING..</p>
      </div>
    );
  };

  renderLoader = () => {
    return <div className="loader" id="loader" />;
  };
}

export default Splash;
