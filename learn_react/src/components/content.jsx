import React from "react";
import Part1 from "./contents/part1";
import Part2 from "./contents/part2";
import Part3 from "./contents/part3";

const part1 = "Fundamentals of React";
const exercises1 = 10;
const part2 = "Using props to pass data";
const exercises2 = 7;
const part3 = "State of a component";
const exercises3 = 14;
const Contents = () => {
  return (
    <>
      <Part1 part1={part1} exercises1={exercises1} />
      <Part2 part2={part2} exercises2={exercises2} />
      <Part3 part3={part3} exercises3={exercises3} />
    </>
  );
};

export default Contents;
