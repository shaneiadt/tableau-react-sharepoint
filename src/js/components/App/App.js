import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{

    constructor() {
        super();
        this.state = {
            para: "This is a sample app rendered with React"
        };
    }

    textboxChangeHandler = (event) => {
        this.setState({
            para: event.target.value
        });
    }
    
    render(){
        return(
            <div>
                <h1>Demo</h1>
                <p>{this.state.para}</p>
                <input type="text" onChange={this.textboxChangeHandler} placeholder="Type here for demo"></input>
            </div>
        );
    }
}

const wrapper = document.getElementById("app-main");
wrapper ? ReactDOM.render(<App />, wrapper) : false;

export default App;