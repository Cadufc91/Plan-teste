import './App.css';
import Cases from './components/Cases/Cases';
import Contact from './components/Contact/Contact';
import Games from './components/Games/Games';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Games />
      <Cases />
      <Contact />
    </div>
  );
}

export default App;
