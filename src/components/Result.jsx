import { useContext } from "react";
import { StoreContext } from "../provider/Store.jsx";
import ResultItem from "./ResultItem";

const Result = () => {
  const { result } = useContext(StoreContext);
  console.log(result);
  return (
    <div className="results" style={{ padding: "0 1rem" }}>
      <h2>Your Hobby Priority:</h2>
      <ol>
        {result.map((hobby) => {
          return <ResultItem key={hobby.id} hobby={hobby} />;
        })}
      </ol>
    </div>
  );
};

export default Result;
