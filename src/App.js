import logo from './logo.svg';
import './App.css';
import Menu from "./components/Menu/menu"
import Home from './components/home';
import Personajes from './components/personajes';
import Citas from './components/citas';
import Episodios from './components/episodios';

function App() {
  const currentURL = window.location.pathname
  function renderContent () {
    switch (currentURL) {
      case "/":
        return <Home/>
      case "/personajes":
        return <Personajes/>
      case "/citas":
        return <Citas/>
      case "/episodios":
        return <Episodios/>
      default:
        return <Home/>
    }
  }
    
  return (
    <div className="App">
      <Menu/>
        {renderContent()}
    </div>
  );
}

export default App;
