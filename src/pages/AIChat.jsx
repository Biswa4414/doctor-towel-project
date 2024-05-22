import React, { useState } from "react";
import "./page.css";

const AIChat = () => {
  const [messages, setMessages] = useState([]);
  const [query, setQuery] = useState("");

  const handleSend = async () => {
    if (!query.trim()) return;
    const userMessage = { sender: "user", text: query };
    setMessages([...messages, userMessage]);

    // Simulate AI response
    const aiMessage = { sender: "ai", text: `AI Response to: ${query}` };
    setMessages((prevMessages) => [...prevMessages, aiMessage]);
    setQuery("");
  };

  return (
    <div className="chat-container">
      <h1>AI Chat</h1>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type your query..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default AIChat;
