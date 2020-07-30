import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//components 
import Navbar from './components/Navbar';
import FourOhFour from './components/FourOhFour'; 
import Login from './components/Login';

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
                component={FourOhFour}
              />

            </Switch>
            
      </Router>
    </div>
  );
}

export default App;
