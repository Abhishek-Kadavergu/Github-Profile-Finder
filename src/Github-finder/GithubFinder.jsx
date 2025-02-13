import React, { useEffect, useState } from "react";
import "./style.css";
import User from "./User";

const GithubFinder = () => {
  const [userName, setUsername] = useState("Abhishek-Kadavergu");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubData() {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${userName}`);

      const result = await response.json();
      if (result) {
        setLoading(false);
        setUserData(result);
        console.log(result);
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  const handleSubmit = () => {
    fetchGithubData();
    setUsername("");
  };

  useEffect(() => {
    fetchGithubData();
  }, []);

  if (loading) {
    return <h3>Loading... Please wait</h3>;
  }
  const changeInput = () => {
    setUsername("");
  };
  return (
    <div>
      <div className="inner">
        <input
          type="text"
          placeholder="Enter Github Username"
          value={userName}
          onChange={(event) => setUsername(event.target.value)}
          onClick={changeInput}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      <div>{userData !== null ? <User user={userData} /> : null}</div>
    </div>
  );
};

export default GithubFinder;
