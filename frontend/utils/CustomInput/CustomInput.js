import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#374850",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "374850",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#374850",
    },
    "&:hover fieldset": {
      borderColor: "#374850",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#374850",
    },
  },
});
export const CustomizedInputs = ({
  htmlFor = "",

  ///.......
  label = "",
  focus = false,
  id = "",
  type = "text",
  name="",
  placeholder = "",
  value = {},
  onChange = {},
  ...props
}) => {
  return (
    <Box
      component="form"
      noValidate
      sx={{
        display: "grid",
        gap: 2,
      }}>
      <TextField
        hiddenLabel
        id="standard-basic"
        label={label}
        size="Normal"
        InputLabelProps={{ shrink: true }}
        color="warning"
        variant="standard"
        margin="normal"
        fullWidth
        value={value}
        type={type}
        name={name}
        onChange={onChange}
        inputProps={{ style: { color: "red" } }}
        focused
      />
    </Box>
  );
};
