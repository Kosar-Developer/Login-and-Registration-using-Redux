import {ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";

// theme
import { theme } from "./frontend/utils/MUI/theme";

// Component
import Register from "./frontend/components/register/register";

// Redux
import { Provider } from "react-redux";
import { store } from "./frontend/redux/store";
import Login from "./frontend/components/login/login";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
