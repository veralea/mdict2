import React, { Component } from 'react';
 import './ResultCard.css'

class ResultCard extends Component {
    constructor(props){
        super(props);
        this.state = {
          translates: []}
    }
    

    render(){

        return(<div className="ResultCard">
            <p>here will be result card</p>
            {this.props.rootId}
            {this.props.inf}
            {this.props.translation} 
        </div>
        )
    }

}

export default ResultCard