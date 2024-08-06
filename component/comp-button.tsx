import React from "react";
import { View, Text, Pressable } from "react-native";
import colors from "../config/config-colors";
import font from "../config/config-fonts";
// import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

interface Props {
  title: string;
  onPress: any;
  viewStyle: any;
  buttonStyle: any;
  titleStyle: any;
  isLoading: any;
  disabled: any;
}
export const Button: React.FC<Props> = ({
  title,
  onPress,
  viewStyle,
  buttonStyle,
  titleStyle,
  isLoading,
  disabled,
}) => {
  return (
    <>
      <View style={[styles.btn, viewStyle]}>
        <Pressable
          style={[styles.button, buttonStyle]}
          onPress={!isLoading ? onPress : null}
          disabled={disabled}
        >
          <Text style={[styles.textthree, titleStyle]}>{title}</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    marginTop: hp("5%"),
  },
  button: {
    width: wp("85%"),
    height: hp("5.5%"),
    // borderWidth: wp('0.3%'),
    backgroundColor: colors.purple,
    borderRadius: hp("1%"),
    justifyContent: "center",
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0.3,
    // shadowRadius: 4.65,
    // elevation: 8,
  },
  textthree: {
    fontFamily: font.GAIAFont,
    textAlign: "center",
    fontSize: hp("2.2%"),
    // fontWeight: 'bold',
    color: "white",
    // textShadowColor: 'black',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },
});
