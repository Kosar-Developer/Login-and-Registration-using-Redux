import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  padding: " 10px 60px",
  backgroundColor: "#475965",
  "&:hover": {
    backgroundColor: "#374850",
  },
}));

export default function CustomizedButtons({children}) {
  return (
    <Stack spacing={2} direction="row" width="300px" display="flex" justifyContent="center" mt={2}>
      <ColorButton variant="contained" type="submit">{children}</ColorButton>
    </Stack>
  );
}
