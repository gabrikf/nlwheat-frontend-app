import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  Keyboard,
} from "react-native";
import { styles } from "./style";
import { Button } from "../Button";
import { COLORS } from "../../theme";
import { api } from "../../services/api";

export function SendMessageForm() {
  const [message, setMessage] = useState("");
  const [sendingMessage, setEndingMEssage] = useState(false);

  async function handleSendMessage() {
    const messageFormated = message.trim();

    if (messageFormated.length > 0) {
      setEndingMEssage(true);
      await api.post("/messages", { message: messageFormated });
      setMessage("");
      Keyboard.dismiss();
      setEndingMEssage(false);
      Alert.alert("Mensagem enviada com sucesso!");
    } else {
      Alert.alert("Escreva a mensagem para enviar");
    }
  }

  return (
    <KeyboardAvoidingView
      behavior="position"
      enabled
      contentContainerStyle={styles.container}
    >
      <TextInput
        style={styles.input}
        keyboardAppearance="dark"
        placeholder="Qual sua expectativa para o evento?"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        onChangeText={setMessage}
        value={message}
        multiline
        maxLength={140}
        editable={!sendingMessage}
      />
      <Button
        title="ENVIAR MENSAGEM"
        backgroundColor={COLORS.PINK}
        isLoading={sendingMessage}
        color={COLORS.WHITE}
        onPress={handleSendMessage}
      />
    </KeyboardAvoidingView>
  );
}
