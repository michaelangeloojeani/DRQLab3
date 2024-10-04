import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/content';
import Footer from './components/Footer';

function App() {
  let x = 5;
  return (
    <div className="App">
   <Header></Header>
    <Content/>
    <Footer></Footer>
    </div>
  );
}

export default App;
