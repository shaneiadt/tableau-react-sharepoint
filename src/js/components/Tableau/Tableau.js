import React, {Component} from 'react';
import tableau from 'tableau-api';

class Tableau extends Component{

    componentDidMount(){
        this.initTableau();
    }

    initTableau(){
        const vizUrl = this.props.url;
        const options = {
            hideTabs: this.props.hideTabs,
            // width: this.props.height,
            // height: this.props.width,
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
        let viz = new window.tableau.Viz(vizContainer, vizUrl, options);
    }
    
    render(){
        return(
            <div style={{border:'1px solid grey'}}>
                <div ref={(div) => { this.vizContainer = div }}></div>
            </div>
        );
    }
}

export default Tableau;