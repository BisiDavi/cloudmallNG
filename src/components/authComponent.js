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
    background: "#DBDADA !important",
    fontWeight: "bold"
  })
});

export const AuthButton = props => {
  const styledProps = { width: `${props.width}` };
  const classes = useStyles(styledProps);

  return (
    <Button
      type="button"
      fullWidth
      variant="contained"
      className={classes.button}
    >
      {props.children}
    </Button>
  );
};
