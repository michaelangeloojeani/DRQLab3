// Import the MovieItem component from the 'movieitem' file
import MovieItem from './movieitem';

// Define a functional component named Movies
const Movies = (props) => {
    // Return a mapped array of MovieItem components, one for each movie in the 'myMovies' prop
    return props.myMovies.map(
        (movie) => {
            // Render a MovieItem component for each movie, passing the movie object as a prop (mymovie)
            // Use the movie's 'imdbID' as the 'key' to ensure each component has a unique identifier
            return <MovieItem mymovie={movie} key={movie.imdbID}/>
        }
    );
}

// Export the Movies component as the default export
export default Movies;
