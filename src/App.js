import './App.css';
import Cases from './components/Cases/Cases';
import Games from './components/Games/Games';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Games />
      <Cases />
    </div>
  );
}

export default App;
