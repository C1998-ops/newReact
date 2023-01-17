import QuoraHeader from "./Components/header/QuoraHeader";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import ContentBody from "./Components/ContentBody/ContentBody";
import SmallWidget from "./Components/Widget/SmallWidget";
function App() {
  return (
    <div className="App">
      <QuoraHeader/>
      <div className="App_container">
        <Sidebar/>
        <ContentBody/>
        <SmallWidget/>
      </div>
    </div>
  );
}

export default App;
