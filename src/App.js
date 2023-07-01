import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
      <BrowserRouter>
      <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />

     <Routes>
       <Route exact path='/general' element= {<News
          key="general"
          pageSize={9}
          category="General"
          country="in"
          apiKey="9127f9b673704da6a6dc08c01ac3d2e9"
          mode={this.state.mode}
        />}/> 
       <Route exact path='/sports' element= {<News
          key="sports"
          pageSize={9}
          category="Sports"
          country="in"
          apiKey="9127f9b673704da6a6dc08c01ac3d2e9"
          mode={this.state.mode}
        />}/> 
       <Route exact path='/business' element= {<News
          key="business"
          pageSize={9}
          category="Business"
          country="in"
          apiKey="9127f9b673704da6a6dc08c01ac3d2e9"
          mode={this.state.mode}
        />}/> 
       <Route exact path='/entertainment' element= {<News
          key="entertainment"
          pageSize={9}
          category="Entertainment"
          country="in"
          apiKey="9127f9b673704da6a6dc08c01ac3d2e9"
          mode={this.state.mode}
        />}/> 
       <Route exact path='/health' element= {<News
          key="health"
          pageSize={9}
          category="Health"
          country="in"
          apiKey="9127f9b673704da6a6dc08c01ac3d2e9"
          mode={this.state.mode}
        />}/> 
       <Route exact path='/science' element= {<News
          key="science"
          pageSize={9}
          category="Science"
          country="in"
          apiKey="9127f9b673704da6a6dc08c01ac3d2e9"
          mode={this.state.mode}
        />}/> 
       <Route exact path='/technology' element= {<News
          key="technology"
          pageSize={9}
          category="Technology"
          country="in"
          apiKey="9127f9b673704da6a6dc08c01ac3d2e9"
          mode={this.state.mode}
        />}/> 
        </Routes>
        </BrowserRouter>
      </>
    );
  }
}
