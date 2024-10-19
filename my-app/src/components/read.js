import Movies from "./movies";
import { useEffect, useState } from "react"; // Importing React hooks for state management and side effects
import axios from "axios"; 

// The Read component fetches movie data and passes it to the Movies component
function Read() {
  const [movies, setMovies] = useState([]); // State variable to store the list of movies, initially an empty array

  // useEffect hook runs the specified code after the component mounts
  useEffect(() => {
    // Fetching movie data from the provided API endpoint using axios
    axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
      .then((response) => {
        setMovies(response.data.movies); // Update the state with the fetched movie data
      })
      .catch((error) => {
        console.log(error); // Logs any errors that occur during the fetch
      });
  }, []); // Empty dependency array ensures this effect runs only once, after the initial render

  // The component's returned JSX, rendering a heading and the Movies component
  return (
    <div>
      <h2>This is my Read Component.</h2> 
      <Movies myMovies={movies} /> {/* Passes the fetched movies to the Movies component as a prop */}
    </div>
  );
}

export default Read; 
