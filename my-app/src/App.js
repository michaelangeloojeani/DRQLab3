import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/content';
import Footer from './components/Footer';

function App() {
  let x = 5;
  return (
    <div className="App">
     <h1>Hello World</h1>
     <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;
