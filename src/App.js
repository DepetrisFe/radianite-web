import "./App.css";
import Header from "./Header";
import FrontPageWeapons from "./Components/Weapons/FrontPageWeapons";
//import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <FrontPageWeapons />
      </div>
    </>
  );
}

export default App;
