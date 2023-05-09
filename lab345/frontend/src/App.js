import "./css/App.css";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Content />
      </Router>
    </div>
  );
}

export default App;
