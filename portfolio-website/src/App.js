import './App.css';
import MenuBar from './components/MenuBar';
import Dock from './components/Dock';
import WebPage from './components/WebPage';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <MenuBar />
      <Dock />
      <WebPage />
    </Router>
  );
}

export default App;
