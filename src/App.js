import "./App.css";
import Landpage from "./Components/landingPageComp/landPage";
import Header from "./Components/headerComp/headerComp";
import SubCompContainer from "./Components/subCompContainer/subCompContainer";
import MainArea from "./Components/mainAreaComp/mainarea";

function App() {
  return (
    <div className="App">
      <Header />

      <MainArea />
    </div>
  );
}

export default App;
