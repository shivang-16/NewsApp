import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      mode: "light"
    }
  }

  toggleMode=()=>{
    const newMode = this.state.mode === 'light' ? 'dark' : 'light';

      this.setState({
        mode: newMode
      })
      document.body.style.backgroundColor = newMode === 'dark' ? 'black' : 'white';
  
  }

  render() {
    return (
      <>
      <Navbar mode={this.state.mode} toggleMode={this.toggleMode}/>
      <News pageSize={6} category="Business" country="in" apiKey="590382b4be7c49d8bd6c3d4f60ddbe1f" mode={this.state.mode}/>
      </>
    );
  }
}
