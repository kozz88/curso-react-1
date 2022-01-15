import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Listar from "./componentes/Listar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        Hola Develoteca
        
        <Routes>
          <Route  path="/" component={Listar} exact />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
