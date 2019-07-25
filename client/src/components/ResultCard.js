import React, { Component } from 'react';
 import './ResultCard.css'

class ResultCard extends Component {
    constructor(props){
        super(props);
        this.state = {
          translates: []}
    }
    
    componentDidMount() {
        alert(this.props.rootId);
        // fetch('http://localhost:8000/gettranslation/'+this.props.rootId).then(response => {
        //   return response.json();
        // }).then(data => {
        //   console.log(data);
        //   this.setState({translates:data})
        // })
    }
    render(){

        return(<div className="ResultCard">
            <p>here will be result card</p>
            {this.props.rootId}
            {/* {
            this.state.translates.map((translate, index) => {
                return(
                    <div dir="rtl" key={index}>{translate.preposition}   {translate.translateRu}</div>
                );
            })
            } */}
        </div>
        )
    }

}

export default ResultCard