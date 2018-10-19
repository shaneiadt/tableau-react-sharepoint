import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Tableau from '../Tableau/Tableau';

class App extends Component{
    
    render(){
        return(
            <Tableau
                url="https://public.tableau.com/views/RegionalSampleWorkbook/Storms?:embed=y&:display_count=yes"
                hideTabs={false}
                />
        );
    }
}

const wrapper = document.getElementById("app-main");
wrapper ? ReactDOM.render(<App />, wrapper) : false;

export default App;