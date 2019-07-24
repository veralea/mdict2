import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route} from '../node_modules/react-router-dom';
import MainTheacherPage from './components/MainTheacherPage';
import MainStudentRuPage from './components/MainStudentRuPage';
import MainStudentEnPage from './components/MainStudentEnPage';
import MainStudentFrPage from './components/MainStudentFrPage';
import Password from './components/Password';

function App() {
  return (
  
      <Router>
       <div>
        <Route exact={true} path='/' component={Password} />
        <Route path='/MainTheacherPage' component={MainTheacherPage}/>
        <Route path='/MainStudentRuPage' component={MainStudentRuPage}/>
        <Route path='/MainStudentEnPage' component={MainStudentEnPage}/>
        <Route path='/MainStudentFrPage' component={MainStudentFrPage}/>
       </div> 
      </Router>
  );
}

export default App;
