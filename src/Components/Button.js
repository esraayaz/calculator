import { useContext } from "react";
import { CalcContext } from "../context/CalcContex";

const getStyleName = (btn) => {
  const className = {
    "=": "equals",
    "/": "operater",
    "×": "operater",
    "-": "operater",
    "+": "operater",
  };
  return className[btn];
};

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);

  // User Click C
  const resetClick = () => {
    setCalc({ sign: "", num: 0, res: 0 });
  };

  //User Click Invert Button
  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: "",
    });
  };

  // User Click Percentage
  const percentageClick = () => {
    setCalc({
      num: calc.num / 100,
      res: calc.res / 100,
      sign: "",
    });
  };

  // User Click Number
  const hangleClickButton = () => {
    const numberString = value.toString();

    let numberValue;
    if (numberString === "0" && calc.num === 0) {
      numberValue = "0";
    } else {
      numberValue = Number(calc.num + numberString);
    }

    setCalc({
      ...calc,
      num: numberValue,
    });
  };

  // User Click Operators
  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  // User Click Comma
  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  // User Click Equals
  const equalsClick = () => {
    if (calc.res && calc.num) {
      const math = (a, b, sign) => {
        const result = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          x: (a, b) => a * b,
          "/": (a, b) => a / b,
        };

        return result[sign](a, b);
      };

      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: "",
        num: 0,
      });
    }
  };

  const handleBtnClick = () => {
    const results = {
      ".": commaClick,
      C: resetClick,
      "/": signClick,
      x: signClick,
      "-": signClick,
      "+": signClick,
      "=": equalsClick,
      "%": percentageClick,
      "+-": invertClick,
    };
    if (results[value]) {
      return results[value]();
    } else {
      return hangleClickButton();
    }
  };

  return (
    <button
      onClick={handleBtnClick}
      className={`${getStyleName(value)} button`}
    >
      {value}
    </button>
  );
};

export default Button;
