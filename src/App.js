import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Upload_csv from './components/upload_file/Upload_csv';

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Login} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/upload_csv' component={Upload_csv} />
      </div>
    </Router>
  );
}

export default App;
