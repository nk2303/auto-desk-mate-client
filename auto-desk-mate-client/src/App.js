import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//components 
import Navbar from './components/Navbar';
import FourOhFour from './components/FourOhFour'; 
import Login from './components/Login';
import Landing from './components/Landing'

function App() {
  return (
    <div className="App">
      <Router>
           <header className="App-header">
              <Navbar />
            </header>

            <Switch>

              <Route 
                exact
                path="/Login" 
                component={Login}
              />

              <Route 
                exact 
                path="/"
                component={Landing}
              />

              <Route 
                component={FourOhFour}
              />

            </Switch>
            
      </Router>
    </div>
  );
}

export default App;
