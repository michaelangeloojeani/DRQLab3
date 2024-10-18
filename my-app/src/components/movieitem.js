// Import useEffect from React to perform side effects in the component
import { useEffect } from "react";
// Import the Card component from the react-bootstrap library
import Card from 'react-bootstrap/Card';

// Define a functional component named MovieItem
function MovieItem(props) {
  // useEffect hook to run a side effect whenever the 'mymovie' prop changes
  useEffect(() => {
    // Log the current movie object to the console
    console.log("Movie Item:", props.mymovie);
  }, [props.mymovie]); // Dependency array: the effect runs only when 'mymovie' prop changes

  // Return JSX to render the UI for the MovieItem component
  return (
    <div>
      {/* Use the Card component from react-bootstrap to display movie details */}
      <Card>
        {/* Card header displays the movie title */}
        <Card.Header>{props.mymovie.Title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            {/* Display the movie poster image */}
            <img src={props.mymovie.Poster} alt={props.mymovie.Title} />
            {/* Display the movie release year as a footer */}
            <footer>{props.mymovie.Year}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

// Export the MovieItem component as the default export
export default MovieItem;
