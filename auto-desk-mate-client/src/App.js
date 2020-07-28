import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//components 
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
           <header className="App-header">
              <Navbar />
            </header>
      </Router>
    </div>
  );
}

export default App;
