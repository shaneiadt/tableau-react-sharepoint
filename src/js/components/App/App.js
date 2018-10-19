import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import tableau from 'tableau-api';

class App extends Component{

    componentDidMount(){
        this.initViz();
    }

    initViz(){
        const vizUrl = 'https://public.tableau.com/views/RegionalSampleWorkbook/Storms';  
        const vizContainer = this.vizContainer;  
        let viz = new window.tableau.Viz(vizContainer, vizUrl)  
    }
    
    render(){
        return(
            <div ref={(div) => { this.vizContainer = div }}>
            </div>  
        );
    }
}

const wrapper = document.getElementById("app-main");
wrapper ? ReactDOM.render(<App />, wrapper) : false;

export default App;