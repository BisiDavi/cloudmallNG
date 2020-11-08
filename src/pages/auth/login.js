import {
  CssBaseline,
  TextField,
  IconButton,
  InputLabel,
  OutlinedInput,
  Button,
  InputAdornment,
  FormControl
} from "@material-ui/core";
import clsx from "clsx";
import Link from "next/link";
import { AuthButton } from "../../components/authComponent";
import { Container, Row, Col } from "react-bootstrap";
import { googleIcon } from "../../imports";
import AuthHeader from "./authHeader";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "80% !important", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    "& input": {
      height: "40px !important",
      width: "80% !important"
    },
    "& .MuiFormControl-fullWidth": {
      margin: "20px 0px !important"
    },
    "& .MuiInputLabel-formControl": {
      marginTop: "-7px !important"
    },
    "& .MuiIconButton-label": {
      marginRight: "-50px !important"
    }
  },
  submit: {
    margin: `${theme.spacing(3, 0, 2)} !important`,
    height: "40px  !important",
    background: "#DBDADA !important",
    fontWeight: "bold !important",
    bottom: "60px",
    position: "absolute",
    width: "80% !important",
    left: "35px"
  },
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    width: "100% !important"
  }
}));

const Login = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Container className="signupemail">
      <AuthHeader title="Login" />
      <Row className="loginText d-flex flex-column">
        <Col className="withGoogle mt-2">
          <Link href="/auth/googlesignup">
            <a className="mx-auto w-75 mt-3 text-decoration-none">
              <AuthButton width="80%">
                <img
                  src={googleIcon}
                  className="mr-3"
                  alt="signin with google"
                />
                Continue with Google
              </AuthButton>
            </a>
          </Link>
          <p className="text-center m-2">Or</p>
          <p className="text-center withEmail">Continue with Email</p>
        </Col>
      </Row>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Login
            </Button>
          </form>
        </div>
      </Container>
    </Container>
  );
};

export default Login;
