import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/Register/registerAction";
import { CustomizedInputs } from "../../utils/CustomInput/CustomInput";
import CustomizedButtons from "../../utils/CustomButton/CustomButton";
import { validate } from "../../utils/VlaidateForm/validate";

//image
import registerImg from "../../../../src/frontend/assets/1.webp";

const Register = () => {
  // States
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [successful, setSuccessful] = useState(false);

  const dispatch = useDispatch();

  // Submit form
  //#region
  useEffect(() => {
    window.scrollTo(0, 0);
    setErrors(validate(data, "SignUp"));
  }, [data]);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const focusHandler = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSuccessful(false);
    dispatch(
      register(
        data.name,
        data.email,
        data.phone,
        data.password,
        data.password_confirmation,
      ),
    );
    setTouched({
      name: true,
      email: true,
      phone: true,
      password: true,
      password_confirmation: true,
    });
  };
  //#endregion
  // End ...

  const errorText = {
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
        justifyContent="space-between">
        <Grid xs={6} item>
          <img src={registerImg} width="100%" />
        </Grid>
        <form onSubmit={submitHandler}>
          <Grid
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
                  }}>
                  SignUp
                </Box>
                <Grid item xs={12}>
                  <CustomizedInputs
                    label="Name"
                    name="name"
                    value={data.name}
                    onChange={changeHandler}
                    onFocus={focusHandler}
                  />
                  {errors.name && touched.name && (
                    <Typography variant="span" style={errorText}>
                      {errors.name}
                    </Typography>
                  )}
                </Grid>
                <CustomizedInputs
                  label="Email"
                  name="email"
                  type="email"
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
                  label="Phone"
                  name="phone"
                  type="number"
                  value={data.phone}
                  onChange={changeHandler}
                  onFocus={focusHandler}
                />
                {errors.phone && touched.phone && (
                  <Typography variant="span" style={errorText}>
                    {errors.phone}
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
                <CustomizedInputs
                  label="ConfirmPassword"
                  name="password_confirmation"
                  value={data.password_confirmation}
                  onChange={changeHandler}
                  onFocus={focusHandler}
                />
                {errors.password_confirmation && touched.password_confirmation && (
                  <Typography variant="span" style={errorText}>
                    {errors.password_confirmation}
                  </Typography>
                )}
                <CustomizedButtons type="submit">SignUp</CustomizedButtons>
              </CardContent>
            </Card>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
};

export default Register;
