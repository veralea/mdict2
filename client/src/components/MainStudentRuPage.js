import React, { Component } from 'react';
import './MainStudentPage.css';
import Search from './Search';

class MainStudentRuPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allSameRoots:[]
        };
        this.getAllSameRoots = this.getAllSameRoots.bind(this);
        
    }

    getAllSameRoots(e){
        e.preventDefault();
        fetch('http://localhost:8000/getallsameroots/').then(response => {
            if(response.ok){
                  return response.json();
                }else{
                  alert("error");
                }
          }).then(data => {
              this.setState({
                  allSameRoots: data
                  
              })
          });
      }

      updateAllrootNumbers (e){
        e.preventDefault();
        fetch('http://localhost:8000/updateallrootnumbers/',{method:'PUT' }).then(response => {
            if(response.ok){
                  return response.json();
                }else{
                  alert("error");
                }
          });    
    }

    updateAllfamilies (e){
        e.preventDefault();
        fetch('http://localhost:8000/updateallfamilies/',{method:'PUT' }).then(response => {
            if(response.ok){
                  return response.json();
                }else{
                  alert("error");
                }
          });    
    }
    
    updateAllfamiliesVerb (e){
        e.preventDefault();
        fetch('http://localhost:8000/updateallfamiliesverb/',{method:'PUT' }).then(response => {
            if(response.ok){
                  return response.json();
                }else{
                  alert("error");
                }
          });    
    }
    updateAlltranslations (e){
        e.preventDefault();
        fetch('http://localhost:8000/updatealltranslations/',{method:'PUT' }).then(response => {
            if(response.ok){
                  return response.json();
                }else{
                  alert("error");
                }
          });    
    }

    render(){
        return(
            <div>
                <div><h1>here will be main student RU page</h1></div>
                <div className="search"><Search /></div>
                <br/>
                <button onClick={this.getAllSameRoots}>getAllSameRoots</button> 
                {
                    this.state.allSameRoots.map((SameRoot, index) => {
                                        
                          if(SameRoot.same_root_id > 1){
                            return (
                          <div key={index}>{SameRoot._id}  {SameRoot.same_root_id}</div>
                          );
                          }
                                   
              
                    })
                }
                <br/>
                <button onClick={this.updateAllfamilies}>updateAllfamilies</button>  
                <br/>
                <button onClick={this.updateAllfamiliesVerb}>updateAllfamiliesVerb</button>  
                <br/>
                <button onClick={this.updateAlltranslations}>updateAlltranslations</button>  
                <br/>
                <button onClick={this.updateAllrootNumbers}>updateAllrootNumbers</button>            
            </div>
        )
    }
}

export default MainStudentRuPage; 