import {
  CssBaseline,
  TextField,
  Container,
  Button,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl
} from "@material-ui/core";
import clsx from "clsx";
import AuthHeader from "./authHeader";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "15px"
  },
  form: {
    width: "80% !important", // Fix IE 11 issue.
    display: "flex",
    flexDirection: "column",
    margin: "auto !important",
    marginTop: `${theme.spacing(3)}px !important`,
    "& input": {
      height: "40px !important",
      paddingLeft: "15px !important"
    },
    "& .MuiFormControl-fullWidth": {
      margin: "12px 0px !important"
    },
    "& .MuiInputLabel-formControl": {
      marginTop: "-7px !important"
    }
  },
  submit: {
    margin: `${theme.spacing(3, 0, 2)} !important`,
    height: "35px  !important",
    marginTop: "60px !important"
  },
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    width: "100% !important",
    margin: "12px 0px !important",
    "& .MuiInputAdornment-positionEnd": {
      marginRight: "12px !important"
    }
  }
}));

const SignupEmail = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: "",
    password2: "",
    showPassword1: false,
    showPassword2: false
  });

  const handleChange = props => event => {
    setValues({ ...values, [props]: event.target.value });
  };

  const handleClickShowPassword1 = () => {
    setValues({ ...values, showPassword1: !values.showPassword1 });
  };
  const handleClickShowPassword2 = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  return (
    <div className="signupemail">
      <AuthHeader title="Continue with Email" />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoFocus
            />
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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="phonenumber"
              label="Phone Number"
              name="phone number"
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
                type={values.showPassword1 ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword1}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword1 ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>

            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword2 ? "text" : "password"}
                value={values.password2}
                onChange={handleChange("password2")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword2}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword2 ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
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
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default SignupEmail;
