import { useState } from "react"; // Importing the useState hook from React for managing component state


function Create() {
  // State variables to store the title, poster URL, and year of the movie
  const [title, setTitle] = useState(''); // State for movie title
  const [poster, setPoster] = useState(''); // State for movie poster URL
  const [year, setYear] = useState(''); // State for movie release year

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior (page refresh)
    console.log(title); // Logs the movie title to the console
    console.log(year); // Logs the movie release year to the console
    console.log(poster); // Logs the movie poster URL to the console
  }

  
  return (
    <div>
      <h2>This is my Create Component.</h2> {/* Header for the component */}
      <form onSubmit={handleSubmit}> {/* Form submission triggers handleSubmit */}
        <div className="form-group">
          {/* Input field for the movie title */}
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title} // Binds the input value to the title state variable
            onChange={(e) => { setTitle(e.target.value) }} // Updates the title state on input change
          />

          {/* Input field for the movie release year */}
          <label>Add Release Year: </label>
          <input type="text"
            className="form-control"
            value={year} // Binds the input value to the year state variable
            onChange={(e) => { setYear(e.target.value) }} // Updates the year state on input change
          />

          {/* Input field for the movie poster URL */}
          <label>Add Poster Url: </label>
          <input type="text"
            className="form-control"
            value={poster} // Binds the input value to the poster state variable
            onChange={(e) => { setPoster(e.target.value) }} // Updates the poster state on input change
          />
        </div>
        {/* Submit button for the form */}
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}

export default Create; 