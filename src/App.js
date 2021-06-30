import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import FrontPageAgents from "./Components/Agents/FrontPageAgents";
import FrontPageWeapons from "./Components/Weapons/FrontPageWeapons";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="content">
          <Sidebar />
          <Switch>
            <Route path="/agents" exact>
              <FrontPageAgents />
            </Route>
            <Route path="/maps" exact></Route>
            <Route path="/weapons" exact>
              <FrontPageWeapons />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
