
import React from 'react';


const Content = () => {
  return (
    // Return a div containing a greeting and the current time
    <div>
      {/* Display a "Hello World!" heading */}
      <h1>Hello World!</h1>

      {/* Display the current time using  toLocaleTimeString method */}
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

// Export the Content component so it can be used in other parts of the application
export default Content;
