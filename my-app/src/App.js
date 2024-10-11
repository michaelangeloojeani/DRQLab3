
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/content';


function App() {
  return (
    // Wrap the application with the Router to handle navigation
    <Router>
      {/* The navigation bar that will be displayed on all pages */}
      <NavigationBar />

      {/* Define the different routes for the application */}
      <Routes>
        {/* Route for the home page, renders the Content component */}
        <Route path="/" element={<Content />} />

        {/* Route for the '/read' path, renders the Footer component */}
        <Route path="/read" element={<read />} />

        {/* Route for the '/create' path, also renders the Footer component */}
        <Route path="/create" element={<create />} />
      </Routes>
    </Router>
  );
}

// Export the App component to be used in other parts of the application
export default App;
