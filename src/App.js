import React from "react";
import HomeScreen from "./HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="app">
      <HomeScreen />
    </div>
  );
}

export default App;
