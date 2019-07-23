import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route} from '../node_modules/react-router-dom';
import MainTheacherPage from './components/MainTheacherPage';
import Password from './components/Password';
import MainStudentPage from './components/MainStudentPage';

function App() {
  return (
  
      <Router>
       <div>
        <Route exact={true} path='/' component={Password} />
        <Route path='/MainTheacherPage' component={MainTheacherPage}/>
        <Route path='/MainStudentPage' component={MainStudentPage}/>
       </div> 
      </Router>
  );
}

export default App;
