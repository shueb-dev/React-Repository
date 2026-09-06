import React, { useState } from "react";
// import profilePicture from "./assets/profile.png";
function App() {
  async function getUser(username) {
    const url = `https://api.github.com/users/${username}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  }

  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");

  function search() {
    if (username.trim() !== "") {
      getUser(username).then((data) => setUser(data));
    }
  }
  return (
    <div className="container d-flex flex-column align-items-center ">
      <div className="input-container d-flex gap-4 my-4 ">
        <input
          type="text"
          placeholder="user name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={search} className="btn btn-primary" type="submit">
          search
        </button>
      </div>
      {user && (
        <div className="card  " style={{ width: "20rem" }}>
          <img src={user.avatar_url} />
          <h3>{user.name}</h3>
          <p>{user.bio}</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Followers: {user.followers}</li>
            <li class="list-group-item">Following: {user.following}</li>
            <li class="list-group-item">public_repos: {user.public_repos}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
