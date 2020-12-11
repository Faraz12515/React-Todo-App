import React from "react";
import "./Ninjas.css";

export default function Ninjas(props) {
  const { ninjas, deleteNinja } = props;

  return (
    <div>
      <h1>Welcome to Ninjas Club</h1>
      {ninjas.map((v, i) => {
        return (
          <div key={i}>
            Name:{v.name}, Age:{v.age}, Belt:{v.belt}{" "}
            <button onClick={() => deleteNinja(v.id)}>Delete Ninja</button>
          </div>
        );
      })}
    </div>
  );
}
