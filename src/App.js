import React, { useState } from "react";
import Friends from "./components/Friends";
import AddFriends from "./components/AddFriends";
// import AddNinja from "./AddNinja";
// import Ninjas from "./Ninjas";

function App() {
  const [friends, setFriends] = useState([
    { id: 1, name: "Talha", age: 24, nick: "Mulla" },
    { id: 2, name: "Noor", age: 23, nick: "Noora" },
    { id: 3, name: "Abdul Rafay", age: 24, nick: "Khan Sahib" },
  ]);
  // const [ninjas, setNinjas] = useState([
  //   { id: 1, name: "Ryu", age: 23, belt: "Black" },
  //   { id: 2, name: "Kim", age: 25, belt: "Green" },
  //   { id: 3, name: "Chun-li", age: 30, belt: "pink" },
  // ]);

  // const addNinja = (ninjaForm) => {
  //   console.log(ninjas);
  //   ninjaForm.id = Math.random();
  //   setNinjas([...ninjas, ninjaForm]);
  // };

  // const deleteNinja = (id) => {
  //   console.log(id);
  //   let ninja = ninjas.filter((v) => {
  //     return v.id !== id;
  //   });
  //   setNinjas(ninja);
  // };

  const addFriends = (friendsForm) => {
    friendsForm.id = Math.random();
    setFriends([...friends, friendsForm]);
  };

  const deleteFriends = (id) => {
    let friend = friends.filter((v) => {
      return v.id !== id;
    });
    setFriends(friend);
  };

  return (
    <div className="App">
      <Friends deleteFriends={deleteFriends} friends={friends} />
      <AddFriends add={addFriends} />
      {/* <Ninjas deleteNinja={deleteNinja} ninjas={ninjas} />
      <AddNinja add={addNinja} /> */}
    </div>
  );
}

export default App;
