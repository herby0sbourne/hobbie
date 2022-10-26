import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h2>Pick a Hobby</h2>
      <button
        className="btn"
        onClick={() => {
          navigate("hobbies");
        }}
      >
        Start a new session
      </button>
    </div>
  );
};

export default Home;
