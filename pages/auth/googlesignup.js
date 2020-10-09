import { Container, Row } from "react-bootstrap";
import { TextField, Button, makeStyles } from "@material-ui/core";
import AuthHeader from "./authHeader";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  }
}));

const GoogleSignup = () => {
  const classes = useStyles();
  return (
    <Container>
      <Row>
        <AuthHeader title="Verify your account" />
      </Row>
      <Row>
        <p>A verification code was sent to you</p>
      </Row>
      <Row>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="enterCode"
            type="number"
            label="Enter Code"
            name="EnterCode"
            placeholder="------"
            autoFocus
            helperText={`Didn't get the code? <b>Resend</b>`}
          />
          <p>Verification code expires after 30 minutes</p>

          <Button className="btn btn-success text-white">Continue</Button>
        </form>
      </Row>
    </Container>
  );
};

export default GoogleSignup;
