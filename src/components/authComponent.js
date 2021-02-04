import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: styledProps => ({
    display: "flex",
    margin: "auto !important",
    height: "40px",
    width: styledProps.width
      ? `${styledProps.width} !important`
      : "100% !important",
    marginTop: "20px !important",
    border: ` 1px solid ${styledProps.borderColor}`,
    backgroundColor: styledProps.backgroundColor || "#f29100 !important",
    fontWeight: "bold",
    color: styledProps.color || "white !important"
  })
});

export const AuthButton = props => {
  const styledProps = {
    width: `${props.width}`,
    backgroundColor: `${props.backgroundColor}`,
    color: `${props.color}`,
    borderColor: `${props.borderColor}`
  };
  const classes = useStyles(styledProps);

  return (
    <Button
      type="button"
      fullWidth      
      className={classes.button}
    >
      {props.children}
    </Button>
  );
};
