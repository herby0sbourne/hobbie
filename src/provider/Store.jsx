import {createContext, useEffect, useState} from "react";

const initial = {
  result: [],
};

export const StoreContext = createContext(initial);

const StoreProvider = ({children}) => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    console.log(result)
  }, [result]);

  return (
      <StoreContext.Provider value={{result, setResult}}>
        {children}
      </StoreContext.Provider>
  );
};

StoreContext.displayName = "Hobby";
export default StoreProvider;
