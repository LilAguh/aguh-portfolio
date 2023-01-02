import Nav from './components/nav/Nav';
import About from './views/About/About';
import ContactMe from './views/ContactMe/ContactMe'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <ContactMe />
    </div>
  );
}

export default App;
