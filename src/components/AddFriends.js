import React, { useState } from "react";

export default function AddFriends(props) {
  const [friendsForm, setfriendsForm] = useState({
    name: "",
    age: "",
    nick: "",
  });

  const handleChange = (e) => {
    setfriendsForm((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(friendsForm);
    props.add(friendsForm);
  };

  return (
    <div>
      <h1>
        <span style={{ borderBottom: "3px solid black" }}>Add Friends</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          id="name"
          value={friendsForm.name}
          onChange={handleChange}
        />
        <label> Age: </label>
        {""}
        <input
          type="text"
          id="age"
          value={friendsForm.age}
          onChange={handleChange}
        />
        <label> Nick: </label>
        <input
          type="text"
          id="nick"
          value={friendsForm.nick}
          onChange={handleChange}
        />{" "}
        <button
          style={{
            padding: 5,
            backgroundColor: "black",
            color: "pink",
            fontSize: 15,
          }}
        >
          Add Friend
        </button>
      </form>
    </div>
  );
}
