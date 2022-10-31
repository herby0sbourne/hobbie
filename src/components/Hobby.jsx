import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../provider/Store.jsx";
import useNext from "../hook/NextSelection.jsx";
import CustomButton from "./CustomButton";
import HOBBIES from "../data/hobbies.js";
import Option from "./Option";

const Hobby = () => {
    const { start, end, next } = useNext();
    const [hobbies, setHobbies] = useState([]);
    const [newList, setNewList] = useState([]);
    const { setResult, setIndex } = useContext(StoreContext);
    const [round, setRound] = useState(1);
    const data = round === 1 ? hobbies : newList;

    useEffect(() => {
        setHobbies(HOBBIES);
    }, []);

    useEffect(() => {
        setIndex({ startIdx: 0, stopIdx: 2 });
        console.log("reset");
    }, [round, hobbies]);

    const roundOne = (id) => {
        const hobby = hobbies.find((hobby) => {
            return hobby.id === id;
        });

        setNewList((prevState) => {
            return [...prevState, hobby];
        });

        if (hobbies.length === end) {
            // setHobbies(newList);
            setRound(2);
        }
    };

    const roundTwo = (id) => {
        const result = hobbies.find((hobby) => {
            return hobby.id === id;
        });

        setResult((prevState) => {
            return [...prevState, result];
        });
    };

    const handelOnClick = (e) => {
        const id = e.target.dataset.id;

        if (round === 1) {
            console.log("round 1");
            roundOne(id);
        }

        if (round === 2) {
            console.log("round 2");
            // roundTwo(id);
            const result = hobbies.find((hobby) => {
                return hobby.id === id;
            });

            setResult((prevState) => {
                return [...prevState, result];
            });
        }

        // const result = hobbies.find((hobby) => {
        //     return hobby.id === id;
        // });
        //
        // setResult((prevState) => {
        //     return [...prevState, result];
        // });

        next();

        // console.log(result);
    };

    const selectNone = () => {
        next();
    };

    const selectBoth = () => {
        const options = document.querySelectorAll(".option");

        options.forEach((element) => {
            const id = element.dataset.id;
            const hobby = hobbies.find((hobby) => {
                return hobby.id === id;
            });

            setNewList((prevState) => {
                return [...prevState, hobby];
            });
            // setResult((prevState) => {
            //     return [...prevState, hobby];
            // });
        });

        next();
    };

    console.log({ hobbies });
    console.log({ newList });
    console.log({ data });
    return (
        <div className="App">
            <div className="buttons">
                <CustomButton title="BOTH" select={selectBoth} />
                <h1 style={{ position: "absolute", top: "0" }}>{round}</h1>
                <CustomButton title="NONE" select={selectNone} />
            </div>

            <div className="select">
                <div className="options">
                    {data.slice(start, end).map((hobby) => {
                        return (
                            <Option key={hobby.id} hobby={hobby} handelOnClick={handelOnClick} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Hobby;
