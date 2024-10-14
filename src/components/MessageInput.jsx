import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { sendMessage } from "../store/chatSlice";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleSend = () => {
    if (message.trim() === "") return;
    dispatch(sendMessage(message));
    setMessage("");
  };

  return (
    <Box display="flex" mt={2}>
      <TextField
        fullWidth
        label="Type a message..."
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSend()}
        InputProps={{
          style: {
            backgroundColor: "#333",
            color: "#e0e0e0",
            borderRadius: "8px",
          },
        }}
        InputLabelProps={{
          style: { color: "#aaa" },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSend}
        style={{
          marginLeft: "10px",
          backgroundColor: "#1f6feb",
          borderRadius: "8px",
          padding: "10px 20px",
        }}
      >
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;
