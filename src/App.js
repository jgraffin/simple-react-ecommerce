import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Card from "./components/Card";
import Detail from "./components/Detail";
import "./App.css";
import { allData } from "./services/api";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Card data={allData} />
          </Route>
          <Route exact path="/product/:id">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
