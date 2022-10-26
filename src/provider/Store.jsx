import { createContext, useEffect, useState } from "react";

const initial = {
    result: [],
    index: {
        startIdx: 0,
        stopIdx: 2
    }
};

export const StoreContext = createContext(initial);

const StoreProvider = ({ children }) => {
    const [result, setResult] = useState([]);
    const [index, setIndex] = useState({ startIdx: 0, stopIdx: 2 });

    useEffect(() => {
        console.log(result);
    }, [result]);

    return (
        <StoreContext.Provider value={{ result, index, setResult, setIndex }}>
            {children}
        </StoreContext.Provider>
    );
};

StoreContext.displayName = "Hobby";
export default StoreProvider;
