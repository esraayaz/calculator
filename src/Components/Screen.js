import { useContext } from "react";
import { CalcContext } from "../context/CalcContex";

const Screen = () => {
  const { calc } = useContext(CalcContext);

  return (
    <div className="screen" max={70}>
      {calc.num ? calc.num : calc.res}
    </div>
  );
};

export default Screen;
