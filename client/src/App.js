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
import Admin from './components/Admin';

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
        redirectAfterFetch(res);
      }).catch(err => console.error(err))
  }, []);

  function redirectAfterFetch(loginObj) {
    
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
      console.assert(loginObj.access, 'no access was sent to appState', loginObj);
    }
  }


  return (

    <Router history={history}>
      <div>
        <Menu pages={appState.pages} />
        <Route exact={true} path='/' render={(props) =>  <Password {...props} redirectAfterFetch={redirectAfterFetch} /> } /> 
        <Route path='/teachersRoom' render={(props) => <MainTheacherPage {...props} redirectAfterFetch={redirectAfterFetch} /> } /> 
        <Route path='/dictionery' render={(props) => <MainStudentPage {...props} redirectAfterFetch={redirectAfterFetch} /> } />         
        <Route path='/admin' render={(props) => <Admin {...props} redirectAfterFetch={redirectAfterFetch} /> } />         
        <Route path='/MainStudentRuPage' component={MainStudentRuPage} />
        <Route path='/MainStudentEnPage' component={MainStudentEnPage} />
        <Route path='/MainStudentFrPage' component={MainStudentFrPage} />
        <Route path='/start' render={(props) => <Password {...props} redirectAfterFetch={redirectAfterFetch} />} />
      </div>
    </Router>
  );
}

export default App;
