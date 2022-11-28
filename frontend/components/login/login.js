import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/Login/loginAction";
import CustomizedButtons from "../../utils/CustomButton/CustomButton";
import { CustomizedInputs } from "../../utils/CustomInput/CustomInput";
import { validate } from "../../utils/VlaidateForm/validate";

//image
import loginImg from "../../../../src/frontend/assets/2.webp";


const Login = () => {
  // States
  const [passwordType, setPasswordType] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [successful, setSuccessful] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  // Eye Password
  //#region
  const togglePassword = () => {
    setPasswordType(!passwordType);
  };
  //#endregion
  //..............

  // Submit form
  //#region
  useEffect(() => {
    window.scrollTo(0, 0);
    setErrors(validate(data, "Login"));
  }, [data, touched]);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const focusHandler = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSuccessful(false);
    dispatch(login(data.email, data.password));
    setTouched({
      email: true,
      password: true,
    });
  };
  //#endregion
  // End ....

  const errorText = {
    margin: "5px 0 7px 0",
    width: " fit-content",
    fontSize: "1.2rem",
    color: "#dc3545",
    padding: "0 5px",
    borderRadius: "3px",
    backgroundColor: "#ff00002d",
  };

  return (
    <Container>
      <Grid
        container
        maxWidth="xl"
        mt={10}
        display="flex"
        justifyContent="space-between"
      >
        <Grid xs={6} item>
          <img src={loginImg} width="100%" />
        </Grid>
        <form onSubmit={submitHandler}>
        <Grid
          mt={15}
          item
        >
          <Card sx={{ bgcolor: "#fff", margin: "10px", boxShadow: 3 }}>
            <CardContent>
              <Box
                sx={{
                  fontWeight: "bold",
                  m: 1,
                  color: "#374850",
                  fontStyle: "oblique",
                  fontSize: "30px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                SignIn
              </Box>

              <CustomizedInputs
                label="Email"
                name="email"
                value={data.email}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
              {errors.email && touched.email && (
                <Typography variant="span" style={errorText}>
                  {errors.email}
                </Typography>
              )}
              <CustomizedInputs
                label="Password"
                name="password"
                value={data.password}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
              {errors.password && touched.password && (
                <Typography variant="span" style={errorText}>
                  {errors.password}
                </Typography>
              )}
              <CustomizedButtons>SignIn</CustomizedButtons>
            </CardContent>
          </Card>
        </Grid>
        </form>
      </Grid>
    </Container>
  );
};

export default Login;
