const part1 = (props) => {
  console.log(props);
  return (
    <>
      <div>
        <p>
          {props.part1} <span>{props.exercises1}</span>
        </p>
      </div>
    </>
  );
};

export default part1;
