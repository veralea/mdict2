import React, { Component } from 'react'
import ResultCard from './ResultCard'

class Search extends Component {
state = {
    query: ''
};
constructor(props) {
    super(props);
    this.state = {
        
        RootsBySearch:[]
    };
    this.getRootsBySearch = this.getRootsBySearch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
}

handleInputChange(event){
    this.setState({query: event.target.value.replace("?","@@").replace("\\","&&").replace("/","№№")});
  }


getRootsBySearch(e){
    e.preventDefault();
    fetch('http://localhost:8000/getrootsbysearch/'+this.state.query).then(response => {
        if(response.ok){
              return response.json();
            }else{
              alert("error");
            }
      }).then(data => {
          this.setState({
              RootsBySearch: data,
              query: this.state.query
          })
      }).then(data1 =>{

      });
  }

 render() {
   return (
    <div>
     <form>
       <input
         placeholder="Search for..."
        //  ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <button onClick={this.getRootsBySearch}>SEARCH</button> 
       {/* <p>{this.state.query}</p> */}
     </form>
     {
      this.state.RootsBySearch.map((RootBySearch, index) => {
        
        // getDescriptionByRootId({root_id});
        return ( <ResultCard rootId = {RootBySearch.root_id} inf = {RootBySearch.inf} translation = {RootBySearch.translations.translateRu} key={index} />
        );
  

      })
     }
    </div>
   )
 }
}

export default Search