import { Button } from "react-bootstrap";
export const OrangeButton = props => {
  const { buttonMargin, text } = props;
  const style = {
    orangeButton: {
      backgroundColor: "#f29100 !important",
      border: "none",
      height: "40px",
      textAlign: "center !important",
      justifyContent: "center",
      alignContent: "center !important",
      alignItems: "center",
      fontFamily: "Roboto",
      fontSize: "20px",
      display: "flex",
      margin: buttonMargin
    }
  };
  return (
    <Button
      style={style.orangeButton}
      className="orange_button text-white w-75"
    >
      {text}
    </Button>
  );
};
