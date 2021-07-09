import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import FrontPageAgents from "./Components/Agents/FrontPageAgents";
import FrontPageMaps from "./Components/Maps/FrontPageMaps";
import FrontPageWeapons from "./Components/Weapons/FrontPageWeapons";
import WeaponsSkins from "./Components/Weapons/WeaponsSkins";
import IndividualAgent from "./Components/Agents/IndividualAgent";
import IndividualMap from "./Components/Maps/IndividualMap";
import FrontPageSprays from "./Components/Sprays/FrontPageSprays";
import FrontPageBuddies from "./Components/Buddies/FrontPageBuddies";
import FrontPageCards from "./Components/Cards/FrontPageCards";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="content">
          <Sidebar />
          <Switch>
            <Route path="/agents" exact component={FrontPageAgents} />
            <Route path="/buddies" exact component={FrontPageBuddies} />
            <Route path="/cards" exact component={FrontPageCards} />
            <Route path="/maps" exact component={FrontPageMaps} />
            <Route path="/sprays" exact component={FrontPageSprays} />
            <Route path="/weapons" exact component={FrontPageWeapons} />
            <Route
              path="/weapons/skins/:weapid"
              exact
              component={WeaponsSkins}
            />
            <Route path="/agents/:agtid" exact component={IndividualAgent} />
            <Route path="/maps/:mapid" exact component={IndividualMap} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
