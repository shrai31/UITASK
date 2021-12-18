import "./App.css";
// import Footer from "./components/Footer";
import MainPageTab from "./components/MainPageTab";
import PermanentDrawerLeft from "./components/PermanentDrawerLeft";

function App() {
  return (
    <div className="App">
      {/* <Footer /> */}
      <PermanentDrawerLeft children={<MainPageTab />}></PermanentDrawerLeft>
    </div>
  );
}

export default App;
