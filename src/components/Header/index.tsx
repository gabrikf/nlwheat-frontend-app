import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import LogoSvg from "../../assets/logo.svg";

import { UserPhoto } from "../userPhoto";
import { useAuth } from "../../hooks/auth";

export function Header() {
  const { user, signOut } = useAuth();
  return (
    <View style={styles.container}>
      <LogoSvg />
      <View style={styles.logOut}>
        {user && (
          <TouchableOpacity onPress={signOut}>
            <Text style={styles.logOutText}>Sair</Text>
          </TouchableOpacity>
        )}

        <UserPhoto imageURI={user?.avatar_url} />
      </View>
    </View>
  );
}
