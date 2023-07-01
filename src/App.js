import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "dark",
      progress:0,
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

  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  //variables
   pageSize = 8;
      apiKey ="52e51654492f4a8b973f8e547626a733";

  render() {
    return (
      <>
      <BrowserRouter>
      
      <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
     <Routes>
       <Route exact path='/' element= {<News setProgress= {this.setProgress}
          key="general"
          pageSize={this.pageSize}
          category="General"
          country="in"
          apiKey={this.apiKey}
          mode={this.state.mode}
        />}/> 
       <Route exact path='/sports' element= {<News setProgress= {this.setProgress}
          key="sports"
          pageSize={this.pageSize}
          category="Sports"
          country="in"
          apiKey={this.apiKey}
          mode={this.state.mode}
        />}/> 
       <Route exact path='/business' element= {<News setProgress= {this.setProgress}
          key="business"
          pageSize={this.pageSize}
          category="Business"
          country="in"
          apiKey={this.apiKey}
          mode={this.state.mode}
        />}/> 
       <Route exact path='/entertainment' element= {<News setProgress= {this.setProgress}
          key="entertainment"
          pageSize={this.pageSize}
          category="Entertainment"
          country="in"
          apiKey={this.apiKey}
          mode={this.state.mode}
        />}/> 
       <Route exact path='/health' element= {<News setProgress= {this.setProgress}
          key="health"
          pageSize={this.pageSize}
          category="Health"
          country="in"
          apiKey={this.apiKey}
          mode={this.state.mode}
        />}/> 
       <Route exact path='/science' element= {<News setProgress= {this.setProgress}
          key="science"
          pageSize={this.pageSize}
          category="Science"
          country="in"
          apiKey={this.apiKey}
          mode={this.state.mode}
        />}/> 
       <Route exact path='/technology' element= {<News setProgress= {this.setProgress}
          key="technology"
          pageSize={this.pageSize}
          category="Technology"
          country="in"
          apiKey={this.apiKey}
          mode={this.state.mode}
        />}/> 
        </Routes>
        </BrowserRouter>
      </>
    );
  }
}
