import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../provider/Store";

const Home = () => {
    const navigate = useNavigate();
    const { setIndex, setResult } = useContext(StoreContext);

    useEffect(() => {
        setResult([]);
        setIndex({ startIdx: 0, stopIdx: 2 });
    }, []);

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
