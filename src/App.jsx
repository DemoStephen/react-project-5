import { useState } from "react";
import Attribution from "./Attribution";
import Header from "./Header";
import Keyboard from "./Keyboard";
import Screen from "./Screen";

export default function App() {
  const [currentValue, setcurrentValue] = useState(0);
  const [PreviousValue, setPreviousValue] = useState("Ans");
  const [theme, setTheme] = useState("");

  return (
    <>
      <main className="d-flex">
        <Header />
        <Screen present={currentValue} past={PreviousValue} />
        <Keyboard />
      </main>
      <Attribution />
    </>
  );
}
