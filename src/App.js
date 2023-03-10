import logo from './logo.svg';
import './App.css';
import Menu from "./components/Menu/menu"
import Home from './components/Home/home';
import Characters from './components/characters';
import Quotes from './components/quotes';
import Episodes from './components/episodes';

function App() {
  const currentURL = window.location.pathname
  function renderContent () {
    switch (currentURL) {
      case "/":
        return <Home/>
      case "/characters":
        return <Characters/>
      case "/quotes":
        return <Quotes/>
      case "/episodes":
        return <Episodes/>
      default:
        return <Home/>
    }
  }
    
  return (
    <div className="App">
      <Menu/>
      <main>
        {renderContent()}
      </main>
      <footer>
        The Office - 2023
      </footer>
    </div>
  );
}

export default App;
