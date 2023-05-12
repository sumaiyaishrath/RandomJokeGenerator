import React, { useState, useEffect } from "react";
//import axios from "axios";

import "./styles.css";

export default function App() {
  const [posts, setPosts] = useState([]);
  const fetchPost = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const postData = await response.json();
    setPosts(postData);
  };

  return (
    <div className="App">
      <h2> Random joke generator </h2>
      <p>{posts.value}</p>
      <button onClick={fetchPost}>Get new joke</button>
    </div>
  );
}
