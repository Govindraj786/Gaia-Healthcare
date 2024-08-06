import React from "react";
import { TextInput, Text } from "react-native";
import { StyleSheet } from "react-native";
import colors from "../config/config-colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import font from "../config/config-fonts";

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (newText: string) => void;
  onBlur: any;
  keyboardType: any;
  textStyle: any;
  secureTextEntry: boolean;
  error?: string | null;
}

export const AppTextInput: React.FC<Props> = ({
  placeholder = "",
  value,
  onChangeText,
  onBlur,
  keyboardType,
  textStyle,
  error,
  secureTextEntry,
}) => {
  return (
    <>
      <TextInput
        style={[styles.inputContainer, textStyle]}
        onChangeText={onChangeText}
        onBlur={onBlur}
        placeholder={placeholder}
        placeholderTextColor={colors.grey}
        keyboardType={keyboardType || "default"}
        autoCorrect={false}
        value={value}
        secureTextEntry={secureTextEntry}
      />
      {error && (
        <Text style={{ color: colors.red, fontFamily: font.GAIAFont }}>
          {error}
        </Text>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    fontFamily: font.GAIAFont,
    borderColor: colors.lightgray,
    margin: hp("1%"),
    fontSize: wp("3.5%"),
    padding: hp("1%"),
    marginTop: wp("4"),
    borderRadius: wp("1"),
  },
});
