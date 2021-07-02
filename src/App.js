import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import FrontPageAgents from "./Components/Agents/FrontPageAgents";
import FrontPageMaps from "./Components/Maps/FrontPageMaps";
import FrontPageWeapons from "./Components/Weapons/FrontPageWeapons";
import WeaponsSkins from "./Components/Weapons/WeaponsSkins";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="content">
          <Sidebar />
          <Switch>
            <Route path="/agents" exact component={FrontPageAgents} />
            <Route path="/maps" exact component={FrontPageMaps} />
            <Route path="/weapons" exact component={FrontPageWeapons} />
            <Route
              path="/weapons/skins/:weapid"
              exact
              component={WeaponsSkins}
            />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
