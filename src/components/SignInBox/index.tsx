import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Button } from "../Button";
import { COLORS } from "../../theme";
import { useAuth } from "../../hooks/auth";

export function SignInBox() {
  const { signIn, isSignIn } = useAuth();
  return (
    <View style={styles.container}>
      <Button
        onPress={signIn}
        icon={"github"}
        title="ENTRAR COM GITHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        isLoading={isSignIn}
      />
    </View>
  );
}
