import React from 'react';
import './App.css';
import About from "./pages/About";
import Portfolio from "./pages/Portfolio"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <>
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
    </Router>
    </>
  );
}

export default App;
