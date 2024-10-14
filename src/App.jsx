import React, { useEffect } from "react";
import { Container, CssBaseline } from "@mui/material";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";
import { useDispatch } from "react-redux";
import { receiveMessage } from "./store/chatSlice";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#fff",
      secondary: "#aaa",
    },
  },
});

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(receiveMessage("Hello! This is a simulated message."));
    }, 5000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container
        maxWidth="sm"
        style={{
          marginTop: "50px",
          padding: "0 10px",
        }}
      >
        <ChatWindow />
        <MessageInput />
      </Container>
    </ThemeProvider>
  );
};

export default App;
