import React from "react";
import { Image } from "react-native";
import { styles } from "./style";
import avatarImg from "../../assets/avatar.png";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONTS } from "../../theme";

const SIZES = {
  SMALL: {
    containerSize: 32,
    avatarSize: 28,
  },
  NORMAL: {
    containerSize: 48,
    avatarSize: 42,
  },
};

type UserImageProps = {
  imageURI: string | undefined;
  sizes?: "SMALL" | "NORMAL";
};

const AVATAR_DEFAULT = Image.resolveAssetSource(avatarImg).uri;

export function UserPhoto({ imageURI, sizes = "NORMAL" }: UserImageProps) {
  const { containerSize, avatarSize } = SIZES[sizes];
  return (
    <LinearGradient
      colors={[COLORS.PINK, COLORS.YELLOW]}
      start={{ x: 0, y: 0.8 }}
      end={{ x: 0.9, y: 1 }}
      style={[
        styles.container,
        {
          height: containerSize,
          width: containerSize,
          borderRadius: containerSize / 2,
        },
      ]}
    >
      <Image
        source={{ uri: imageURI || AVATAR_DEFAULT }}
        style={[
          styles.avatar,
          {
            height: avatarSize,
            width: avatarSize,
            borderRadius: avatarSize / 2,
          },
        ]}
      />
    </LinearGradient>
  );
}
