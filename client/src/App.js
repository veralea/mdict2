import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Router, Route } from '../node_modules/react-router-dom';
import history from './functions/history';

//components
import Menu from './commons/Menu';
import MainTheacherPage from './components/MainTheacherPage';
import MainStudentPage from './components/MainStudentEnPage'
import MainStudentRuPage from './components/MainStudentRuPage';
import MainStudentEnPage from './components/MainStudentEnPage';
import MainStudentFrPage from './components/MainStudentFrPage';
import RegisterPage from './components/RegisterPage';
import Password from './components/Password';

function App() {

  const [appState, setAppState] = useState({
    redirect: false,
    pages: []
  });
  useEffect(() => {
    //check if user is logged in
    
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
        //get access pages and redirect to main page according to user role
        afterLoginSettings(res);
      }).catch(err => console.error(err))
  }, []);

  function afterLoginSettings(loginObj) {
    
    //set pages, redirect to main page of user accordint to the role
    if (loginObj.access) {
      setAppState({
        ...appState,
        redirect: loginObj.access.redirect.link || false,
        pages: loginObj.access.pages || []
      })
      if (loginObj.access.redirect) {
        //redirect
        history.push(loginObj.access.redirect.link);
      }
    } else {
      console.assert(loginObj.access, 'no access wass sent to appStater', loginObj);
    }
  }


  return (

    <Router history={history}>
      <div>
        <Menu pages={appState.pages} />
        <Route exact={true} path='/' render={(props) =>  <Password {...props} afterLoginSettings={afterLoginSettings} /> } /> 
        <Route path='/teachersRoom' component={MainTheacherPage} />
        <Route path='/dictionery' component={MainStudentPage} />
        <Route path='/MainStudentRuPage' component={MainStudentRuPage} />
        <Route path='/MainStudentEnPage' component={MainStudentEnPage} />
        <Route path='/MainStudentFrPage' component={MainStudentFrPage} />
        <Route path='/start' render={(props) => <Password {...props} afterLoginSettings={afterLoginSettings} />} />
      </div>
    </Router>
  );
}

export default App;
