import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./route";

import "./App.css";

import { DevNavBar } from "./components/devNavBar";

function App() {
  const routes = useRoutes();
  return (
    <>
      <Router>
        <DevNavBar />
        <div className="container">{routes}</div>
      </Router>
    </>
  );
}

export default App;
