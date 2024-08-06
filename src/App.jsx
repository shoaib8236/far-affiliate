// App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/index";

const App = () => {
  return (
    <Router>
      <div className="h-[100svh] overflow-hidden">
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
