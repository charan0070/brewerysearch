/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginSignup from './containers/LoginSignup/LoginSignup';
import Homepage from './containers/Homepage/Homepage';
import DetailsPage from './containers/DetailsPage/DetailsPage';

const App = () => {
  return (
    <div className='App'>
      <h1 style={{color:"Black",textAlign:"center",borderRadius:"5px"}}>Brewery Review System</h1>
      <Router>
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

