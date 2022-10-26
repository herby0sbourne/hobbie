import { useContext, useState } from 'react';
import { StoreContext } from '../provider/Store.jsx';
import useNext from '../hook/NextSelection.jsx';
import CustomButton from './CustomButton';
import HOBBIES from '../data/hobbies.js';
import Option from './Option';
// import homeIcon from "../assets/icons8-home.svg";
// import { Link } from "react-router-dom";

const Hobby = () => {
  const { start, end, next } = useNext();
  const [hobbies, setHobbies] = useState(HOBBIES);
  const { setResult } = useContext(StoreContext);

  const data = hobbies.slice(start, end).map((hobby) => {
    return hobby;
  });
  console.log({ data });

  const handelOnClick = (e) => {
    const id = e.target.dataset.id;

    const result = hobbies.find((hobby) => {
      return hobby.id === id;
    });

    setResult((prevState) => {
      return [...prevState, result];
    });

    next();

    console.log(result);
  };
  return (
    <div className="App">
      <div className="buttons">
        <CustomButton title="BOTH" />
        <CustomButton title="NONE" />
      </div>

      <div className="selection">
        <div className="select">
          <div className="options">
            {data.map((hobby) => {
              return (
                <Option key={hobby.id} hobby={hobby} handelOnClick={handelOnClick} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobby;
