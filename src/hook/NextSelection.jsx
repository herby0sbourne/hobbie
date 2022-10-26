import { useState } from "react";

const useNext = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(2);

  const next = () => {
    setStart((prevState) => {
      return prevState + 2;
    });

    setEnd((prevState) => {
      return prevState + 2;
    });
  };

  return { start, end, next };
};

export default useNext;
