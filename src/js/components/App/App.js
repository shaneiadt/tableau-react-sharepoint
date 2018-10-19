import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import tableau from 'tableau-api';

class App extends Component{

    componentDidMount(){
        this.initTableau();
    }

    initTableau(){
        const vizUrl = 'https://public.tableau.com/views/RegionalSampleWorkbook/Storms?:embed=y&:display_count=yes';
        const options = {
            hideTabs: false,
            // width: "700px",
            // height: "800px",
            onFirstInteractive: () => {
                const sheet = viz.getWorkbook().getActiveSheet().getWorksheets().get("Table");
                const options = {
                    ignoreAliases: false,
                    ignoreSelection: false,
                    includeAllColumns: false
                };
                sheet.getUnderlyingDataAsync(options).then((t) => {
                    const tableauData = t.getData();
                    let data = [];
                    const pointCount = tableauData.length;
                    for(let a = 0; a < pointCount; a++ ) {
                        data = data.concat({
                            x: tableauData[a][0].value,
                            y: Math.round(tableauData[a][3].value,2)
                        })
                    };
                })
            }
        };  
        const vizContainer = this.vizContainer;  
        let viz = new window.tableau.Viz(vizContainer, vizUrl, options)  
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