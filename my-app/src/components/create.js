import {useState} from "react";

const Create = () => {

  const[title, setTitle]

    return <div>
    <h3>Hello form create component</h3>
    <form onSubmit={handleSubmit}>
    <div className="form-group">
  <label>Add Movie Title: </label>
  <input type="text"
    className="form-control"
    value={title}
    onChange={(e) => { setTitle(e.target.value) }} 
  />
</div>
      </form>

    </div>
  };
  
  export default Create;