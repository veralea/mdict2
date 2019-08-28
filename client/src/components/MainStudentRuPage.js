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
    countRootsWriteArray(e){
      e.preventDefault();
      fetch('http://localhost:8000/countroots/').then(response => {
        if(response.ok){
              return response.json();
            }else{
              alert("error");
            }
      });
    }
    putOldRootOnNewField(e){
      fetch('http://localhost:8000/oldroots/',{method:'PUT' }).then(response => {
        if(response.ok){
              return response.json();
            }else{
              alert("error");
            }
      });    
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
        fetch('http://localhost:8000/updatealltranslations1/',{method:'PUT' }).then(response => {
            if(response.ok){
                  return response.json();
                }else{
                  alert("error");
                }
          });    
    }
    checkAndRenameSoundFile(e){
      e.preventDefault();
      fetch('http://localhost:8000/checkandrenamesoundfile/',{method:'GET' }).then(response => {
        if(response.ok){
              return response.json();
            }else{
              alert("error");
            }
            return(true);
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
                                   
                          return(true);
                    })
                }
                <br/>
                <button onClick={this.countRootsWriteArray}>Count roots and whrite to array</button>
                <br/>
                <button onClick={this.putOldRootOnNewField}>Put old root on new field</button>
                <br/>
                <button onClick={this.updateAllfamilies}>updateAllfamilies</button>  
                <br/>
                <button onClick={this.updateAllfamiliesVerb}>updateAllfamiliesVerb</button>  
                <br/>
                <button onClick={this.updateAlltranslations}>updateAlltranslations</button>  
                <br/>
                <button onClick={this.updateAllrootNumbers}>updateAllrootNumbers</button> 
                <br/> 
                <button onClick={this.checkAndRenameSoundFile}>Check and rename  sound file</button>            
            </div>
        )
    }
}

export default MainStudentRuPage; 