import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  // Assuming you store home styles here

const Home = () => {
  return (
    <div className="container">
      <h2>Welcome to the Absolute Sword Sense Wiki</h2>
      <p>Explore the fascinating world of Absolute Sword Sense, learn about characters, weapons, and much more!</p>
      
      <div className="grid">
        <Link to="/article/1" className="card">
          <h3>About the World</h3>
          <p>Explore the history and settings of the Absolute Sword Sense universe.</p>
        </Link>
        <Link to="/article/2" className="card">
          <h3>Characters</h3>
          <p>Get to know the main characters and their journeys.</p>
        </Link>
        <Link to="/article/3" className="card">
          <h3>Weapons</h3>
          <p>Discover the legendary weapons and artifacts in the story.</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
