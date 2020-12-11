import React from "react";

export default function Friends(props) {
  const { friends, deleteFriends } = props;
  return (
    <div>
      <h1>
        <span style={{ borderBottom: "3px solid black" }}>
          Hello My Friends
        </span>
      </h1>
      {friends.map((v, i) => {
        return (
          <div>
            <div style={{ paddingTop: 5 }} key={i}>
              <p>
                {" "}
                <span>Name: {v.name}</span>
              </p>
              <span>Age: {v.age}</span>
              <span> Nick: {v.nick}</span>{" "}
              <button
                onClick={() => deleteFriends(v.id)}
                style={{
                  backgroundColor: "black",
                  color: "pink",
                  fontSize: 15,
                }}
              >
                Delete Friend
              </button>
            </div>
            <br />
          </div>
        );
      })}
    </div>
  );
}
