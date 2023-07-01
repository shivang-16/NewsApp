import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "dark",
    };
  }

  toggleMode = () => {
    const newMode = this.state.mode === "light" ? "dark" : "light";

    this.setState({
      mode: newMode,
    });
    document.body.style.backgroundColor =
      newMode === "dark" ? "black" : "white";
  };

  render() {
    return (
      <>
      {/* ApiKeys1-> dbe57b028aeb41e285a226a94865f7a7
          ApiKeys2-> 590382b4be7c49d8bd6c3d4f60ddbe1f   
               */}
        <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />
        <News
          pageSize={9}
          category="Sports"
          country="in"
          apiKey="590382b4be7c49d8bd6c3d4f60ddbe1f"
          mode={this.state.mode}
        />
      </>
    );
  }
}
