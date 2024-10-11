import MovieItem from './movieitem';

const Movies = (props) => {
    return props.myMovies.map(
        (movie)=>{
                return <MovieItem mymoovie={movie} />
        }
        

    );

}
  
  export default Movies;