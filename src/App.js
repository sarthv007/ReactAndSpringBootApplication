import React from "react";
//import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import RouteComponent from "./Components/SPA/RouteComponent";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome to react js!",
    };
  }

  render() {
    return (
      <div
        className={"App"}
        style={{
          margin: "20px auto",
          width: "100%",
          padding: "10px",
        }}
      >
        <RouteComponent />
      </div>
    );
  }
}

export default App;
