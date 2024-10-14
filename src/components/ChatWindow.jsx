import React, { useEffect, useRef } from "react";
import { Paper, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const ChatWindow = () => {
  const messages = useSelector((state) => state.chat.messages);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Paper
      elevation={4}
      style={{
        height: "400px",
        overflowY: "auto",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#2c2c2c",
      }}
    >
      <List>
        {messages.map((message, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={message.text}
              primaryTypographyProps={{ style: { color: "#e0e0e0" } }}
              secondary={
                <Typography variant="caption" style={{ color: "#aaa" }}>
                  {message.timestamp}
                </Typography>
              }
            />
          </ListItem>
        ))}
        <div ref={chatEndRef} />
      </List>
    </Paper>
  );
};

export default ChatWindow;
