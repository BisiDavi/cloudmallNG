import { Container, Button, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { TextField, makeStyles } from "@material-ui/core";
import AuthHeader from "./authHeader";
import { AuthButton } from "../../components/authComponent";

const useStyles = makeStyles(theme => ({
  form: {
    width: "90% !important", // Fix IE 11 issue.
    margin: "auto !important",
    display: "flex",
    flexDirection: "column",
    "& input": {
      height: "40px !important"
    }
  }
}));

const GoogleSignup = () => {
  const classes = useStyles();
  const boldResend = <p className="font-weight-bold">Resend</p>;
  return (
    <Container>
      <AuthHeader title="Verify your account" />
      <Row>
        <Col className="mt-3 mb-2">
          <p className="text-center">A verification code was sent to you</p>
        </Col>
        <Col xs={12} className="mt-3">
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
              InputLabelProps={{
                shrink: true
              }}
              placeholder="- - - - - -"
              autoFocus
              helperText={`Didn't get the code? ${boldResend}`}
            />
            <p className="mt-2 ">Verification code expires after 10 minutes</p>
            <Link href="/home">
              <a className="w-75 p-2 mx-auto text-decoration-none">
                <AuthButton>                 
                  Continue                  
                </AuthButton>
              </a>
            </Link>
          </form>
        </Col>
      </Row>
      <style jsx>
        {`
          .form input {
            height: 35px !important;
            width: 80% !important;
          }
          .form {
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </Container>
  );
};

export default GoogleSignup;
