import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Route } from '../node_modules/react-router-dom';

//components
import Menu from './commons/Menu';
import MainTheacherPage from './components/MainTheacherPage';
import MainStudentRuPage from './components/MainStudentRuPage';
import MainStudentEnPage from './components/MainStudentEnPage';
import MainStudentFrPage from './components/MainStudentFrPage';
import RegisterPage from './components/RegisterPage';
import Password from './components/Password';

function App() {

  const [appState, setAppState] = useState({
    redirect:false
  });
  useEffect(() => {
    console.log('fetch')
    fetch('http://localhost:8000/auth/isLogged', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ test: 'test' }), 
    })
      .then(response => response.json())
      .then(res => {
        console.dir(res);       
        setAppState({ ...appState, redirect:res.access.redirect.link })
      }).catch(err => console.error(err))
  }, [])
  return (
  
      <Router>
      <div>
        <Menu redirect={appState.redirect} />
        <Route exact={true} path='/' component={Password} />       
        <Route path='/MainTheacherPage' component={MainTheacherPage}/>
        <Route path='/MainStudentRuPage' component={MainStudentRuPage}/>
        <Route path='/MainStudentEnPage' component={MainStudentEnPage}/>
        <Route path='/MainStudentFrPage' component={MainStudentFrPage}/>
        <Route path='/register' component={Password}/>
       </div> 
      </Router>
  );
}

export default App;
