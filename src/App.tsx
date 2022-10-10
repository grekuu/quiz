import "./index.css";
import { useEffect, useState } from "react";

function App() {
  const [color, setColor] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<string>("");

  const getRandomColor = () => {
    const digits = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    const color = new Array(6)
      .fill("")
      .map(() => digits[Math.floor(Math.random() * digits.length)])
      .join("");

    return `#${color}`;
  };

  function setButtons() {
    const actualColor = getRandomColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, getRandomColor(), getRandomColor()].sort(
        () => Math.random() - 0.5
      )
    );
    // console.log(actualColor);
  }

  useEffect(() => {
    setButtons();
  }, []);

  function handleClick(answer: string) {
    if (answer === color) {
      setIsCorrect("Correct!");
      setButtons();
    } else setIsCorrect("Wrong!");
  }

  return (
    <div className="container">
      <div className="colorContainer" style={{ background: color }}></div>
      <div className="btnContainer">
        {answers.map((answer, id) => (
          <button key={id} onClick={() => handleClick(answer)}>
            {answer}
          </button>
        ))}
      </div>
      <span>{isCorrect}</span>
    </div>
  );
}

export default App;
