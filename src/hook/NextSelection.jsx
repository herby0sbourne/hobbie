import { useState, useEffect, useContext } from 'react';
import { StoreContext } from '../provider/Store';

const useNext = () => {
  const { index, setIndex } = useContext(StoreContext);
  const { startIdx: start, stopIdx: end } = index;
  // const [start, setStart] = useState(0);
  // const [end, setEnd] = useState(2);

  const next = () => {
    setIndex((prevState) => {
      return {
        startIdx: prevState.startIdx + 2,
        stopIdx: prevState.stopIdx + 2,
      };
    });
  };

  // const next = () => {
  //   setStart((prevState) => {
  //     return prevState + 2;
  //   });

  //   setEnd((prevState) => {
  //     return prevState + 2;
  //   });
  // };

  return { start, end, next };
};

export default useNext;
