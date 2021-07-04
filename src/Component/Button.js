import "./Button.module.css";

const Button = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    props.onclick(
      props.txtArr[0].current.value +
        " " +
        props.txtArr[1].current.value +
        " " +
        props.txtArr[2].current.value +
        " " +
        props.txtArr[3].current.value
    );
    props.txtArr[0].current.value="";
    props.txtArr[1].current.value="";
    props.txtArr[2].current.value="";
    props.txtArr[3].current.value="";
  };
  return <button  onClick={submitHandler}>Submit</button>;
};

export default Button;
