import React from "react";

const User = ({ user }) => {
  const { avatar_url, login, name, public_repos, created_at, html_url } = user;
  const date = created_at.substring(0, 10);

  return (
    <div className="userData">
      <img src={avatar_url} alt="User Avatar" />
      <div className="details">
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          {name || login}
        </a>
        <h2>Name: {name || login}</h2>
        <h3>Public Repos: {public_repos}</h3>
        <h3>Created at: {date}</h3>
      </div>
    </div>
  );
};

export default User;
