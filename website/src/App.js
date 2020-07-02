import React from "react";
import PageWrapper from "./components/PageWrapper";
import Home from "./components/Pages/Home";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


function App() {
  return (
    <Router>
    <PageWrapper>
        <Route
          path="/"
          component={Home}
         />
    </PageWrapper>
    </Router>
  );
}

export default App;
