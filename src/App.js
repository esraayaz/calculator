import Wrapper from "./Components/Wrapper.js";
import Screen from "./Components/Screen.js";
import ButtonBox from "./Components/ButtonBox.js";
import Button from "./Components/Button.js";
import Footer from "./Components/Footer.js";
import CalcProvider from "./context/CalcContex.js";
import "./App.css";

const btnValues = [
  ["C", "+/-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <div className="container">
      <CalcProvider>
        <Wrapper>
          <Screen />
          <ButtonBox>
            {btnValues.flat().map((btn, i) => (
              <Button value={btn} key={i} />
            ))}
          </ButtonBox>
        </Wrapper>
      </CalcProvider>
      <Footer />
    </div>
  );
}

export default App;
