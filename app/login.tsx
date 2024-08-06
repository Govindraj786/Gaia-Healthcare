import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import colors from "../config/config-colors";
import fonts from "../config/config-fonts";
import { AppTextInput } from "../component/comp-textInput";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Button } from "../component/comp-button";
import Screen from "../component/comp-screen";
import {
  usernameRegex,
  emailRegex,
  Email,
  Password,
} from "../_main/_main-constants";

interface AuthState {
  email: string;
  password: string;
}

interface Props {
  navigation: any;
  authState: AuthState;
}
const Login: React.FC<Props> = ({ navigation, authState }) => {
  const [isSecure, setIsSecure] = useState(true);
  const [state, setState] = useState<AuthState>({
    email: authState?.email || "",
    password: authState?.password || "",
  });
  const [errors, setErrors] = useState<{
    email: string | null;
    password: string | null;
  }>({
    email: null,
    password: null,
  });
  console.log("state", state);

  const validateInput = () => {
    const newErrors: any = {};
    if (!emailRegex.test(state.email)) {
      newErrors.email = Email;
    }

    if (!usernameRegex.test(state.password)) {
      newErrors.password = Password;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNavigation = () => {
    if (validateInput()) {
      // Proceed with navigation or other logic
      navigation.navigate("Tab");
    }
    setState({ email: "", password: "" });
  };

  return (
    <Screen>
      <View style={styles.Container}>
        {/* <Text onPress={() => handleNavigation()}>Login123</Text> */}
        <Text style={styles.logText}>Login</Text>
        <Text style={styles.enterText}>Enter your credentials to Login</Text>
        <View style={styles.Content}>
          <Text style={styles.textContent}>Email</Text>
          <AppTextInput
            placeholder="Email"
            value={state.email ?? ""}
            onChangeText={(newText: string) =>
              setState({ ...state, email: newText })
            }
            onBlur={""}
            keyboardType={""}
            textStyle={""}
            secureTextEntry={false}
          />
          {errors.email ? (
            <Text style={{ color: colors.red, fontFamily: fonts.GAIAFont }}>
              {errors.email}
            </Text>
          ) : null}
          <Text style={styles.textContent}>Password</Text>
          <View>
            <AppTextInput
              placeholder="Password"
              value={state.password ?? ""}
              onChangeText={(newText: string) =>
                setState({ ...state, password: newText })
              }
              onBlur={""}
              keyboardType={""}
              textStyle={""}
              secureTextEntry={isSecure}
            />
            <TouchableOpacity
              onPress={() => setIsSecure((p) => !p)}
              style={styles.eyeIcons}
            >
              <Image
                source={
                  isSecure
                    ? require("../assets/eye-open.png")
                    : require("../assets/eye-closed.png")
                }
                resizeMode="contain"
                style={{ width: 25 }}
              />
            </TouchableOpacity>
          </View>
          {errors.password ? (
            <Text style={styles.errorMessage}>{errors.password}</Text>
          ) : null}
          <Button
            title={"Login"}
            onPress={handleNavigation}
            viewStyle={undefined}
            buttonStyle={undefined}
            titleStyle={undefined}
            isLoading={undefined}
            disabled={undefined}
          />
        </View>
      </View>
    </Screen>
  );
};

export default Login;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.white,
    // borderWidth: 1,
    // margin: wp('1%'),
  },
  Content: {
    margin: wp("1"),
    // borderWidth: 1,
    // display: 'flex',
    // justifyContent: 'center',
    // alignSelf: 'center',
    marginTop: hp("2"),
  },
  errorMessage: {
    color: colors.red,
    fontFamily: fonts.GAIAFont,
  },
  textContent: {
    // borderWidth: 1,
    marginLeft: wp("2"),
    fontFamily: fonts.GAIAFont,
    fontWeight: "bold",
    fontSize: wp("4.5"),
    color: colors.black,
  },
  logText: {
    marginTop: wp("15"),
    fontFamily: fonts.GAIAFont,
    fontWeight: "bold",
    fontSize: wp("6"),
    color: colors.black,
    marginLeft: wp("2"),
  },
  enterText: {
    marginLeft: wp("2"),
    color: colors.grey,
  },
  eyeIcons: {
    position: "absolute",
    top: wp("7"),
    right: "8%",
  },
});
