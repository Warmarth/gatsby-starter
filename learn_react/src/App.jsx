import React from "react";
import Header from "./components/Header";
import Contents from "./components/content";
import Total from "./components/Total";
const part1 = "Fundamentals of React";
const exercises1 = 10;
const part2 = "Using props to pass data";
const exercises2 = 7;
const part3 = "State of a component";
const exercises3 = 14;

const App = () => {
  return (
    <div>
      <Header />
      <Contents />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

export default App;
