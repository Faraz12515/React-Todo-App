import React, { useState } from "react";

export default function AddNinja(props) {
  const [ninjaForm, setNinjaForm] = useState({
    name: "",
    age: "",
    belt: "",
  });

  const handleChange = (e) => {
    setNinjaForm((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(ninja);
    props.add(ninjaForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          id="name"
          value={ninjaForm.name}
          onChange={handleChange}
        />
        <label>Age</label>
        <input
          type="text"
          id="age"
          value={ninjaForm.age}
          onChange={handleChange}
        />
        <label>Belt</label>
        <input
          type="text"
          id="belt"
          value={ninjaForm.belt}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
