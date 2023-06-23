import React, { useState } from "react"; // eslint-disable-line
import MessageFormUI from "./MessageFormUI";

const StandardMessageForm = ({ props, activeChat }) => { // eslint-disable-line
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");

  const handleChange = (e) => setMessage(e.target.value);

  const handleSubmit = async () => {
    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);
    const at = attachment ? [{ blob: attachment, file: attachment.name }] : [];
    const form = {
      attachments: at,
      created: date,
      sender_username: props.username,// eslint-disable-line
      text: message,
      activeChatId: activeChat.id,// eslint-disable-line
    };

    props.onSubmit(form); // eslint-disable-line
    setMessage("");
    setAttachment("");
  };

  return (
    <MessageFormUI
      setAttachment={setAttachment}
      message={message}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default StandardMessageForm;