import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/content';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/read" element={<Footer />} />
        <Route path="/create" element={<Footer />} />
      </Routes>
     
    </Router>
  );
}

export default App;