import React from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router , Route } from "react-router-dom";
import Hotels from './pages/Hotels'
import Orders from "./pages/Orders"




function App() {
  return (
    
    <Router>
      <div className="App">
      <Switch>
        
        <Route exact path="/" component={Hotels}></Route>
        <Route exact path="/order/:id" component={Orders}></Route>
        </Switch>
        </div>
      </Router>

   
  );
}

export default App;
