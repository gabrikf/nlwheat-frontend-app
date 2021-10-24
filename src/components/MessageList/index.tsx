import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Message, MessageProps } from "../Messeges";
import { api } from "../../services/api";
import { io } from "socket.io-client";

let messageQueue: MessageProps[] = [];

const socket = io(String(api.defaults.baseURL));
socket.on("newMessage", (newMessage) => {
  messageQueue.push(newMessage);
  console.log(newMessage);
});

export function MessageList() {
  const [messages, setMesseges] = useState<MessageProps[]>([]);

  useEffect(() => {
    async function fetchMessages() {
      const messagesResponse = await api.get<MessageProps[]>("messages/last3");
      setMesseges(messagesResponse.data);
    }
    fetchMessages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messageQueue.length > 0) {
        setMesseges((prevState) => [
          messageQueue[0],
          prevState[0],
          prevState[1],
        ]);
        messageQueue.shift();
      }
    }, 3000);

    return () => clearInterval(timer);
  }, []);
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content} // style into the component
      keyboardShouldPersistTaps="never" // keyboard closes when list has been touched
    >
      {messages.map((message, index) => (
        <Message key={index} data={message} />
      ))}
    </ScrollView>
  );
}
