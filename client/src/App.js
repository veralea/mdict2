import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Route } from '../node_modules/react-router-dom';

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
    pages:[]
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
        setAppState({
          ...appState,
          redirect: res.access.redirect.link,
          pages:res.access.pages
        })
      }).catch(err => console.error(err))
  }, [])
  return (
  
      <Router>
      <div>
        <Menu redirect={appState.redirect} pages={appState.pages}/>
        <Route exact={true} path='/' component={Password} />       
        <Route path='/teachersRoom' component={MainTheacherPage} />
        <Route path='/dictionery' component={MainStudentPage} />
        <Route path='/MainStudentRuPage' component={MainStudentRuPage}/>
        <Route path='/MainStudentEnPage' component={MainStudentEnPage}/>
        <Route path='/MainStudentFrPage' component={MainStudentFrPage}/>
        <Route path='/register' component={Password}/>
       </div> 
      </Router>
  );
}

export default App;
