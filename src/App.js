
import React, {Component} from "react";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name : '',
    };
  }

  setName = (ev) => {
    let name = ev.target.value
    this.setState({
      name : name
    });
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <input onChange={this.setName}/>
      </div>
    );
  }
}

export default App;