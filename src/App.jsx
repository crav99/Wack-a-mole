import { useEffect, useState } from "react";
import "./App.css";
import hole from "./assets/hole.png";
import mole from "./assets/mole.png";

function App() {
  const [holes, setHoles] = useState(new Array(9).fill(true));
  const [points, setPoints] = useState(0);

  const changeMole = () => {
    const random = Math.floor(Math.random() * holes.length);
    setHoles(new Array(9).fill(true));
    const newHoles = [...holes];
    newHoles[random] = false;
    setHoles(newHoles);
    setTimeout(() => {
      hideMole(random);
    }, 800);
  };

  const hideMole = (index) => {
    const newHoles = [...holes];
    newHoles[index] = true;
    setHoles(newHoles);
  };

  const handleClick = (index) => {
    if (!holes[index]) {
      setPoints(points + 1);
      hideMole(index);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeMole();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [holes]);

  return (
    <>
      <h1>Points {points}</h1>
      <div className="grid">
        {holes.map((isHole, index) => (
          <img onClick={() => handleClick(index)} key={index} src={isHole ? hole : mole} />
        ))}
      </div>
    </>
  );
}

export default App;
