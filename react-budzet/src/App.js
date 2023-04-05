import "./reset.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
    <Header />
    <Button idValue="buttonID" buttonValue="Dodaj" />
    </div>
  );
}

export default App;
