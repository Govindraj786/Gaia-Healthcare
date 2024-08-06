import React, { useEffect } from "react";
import { BackHandler } from "react-native";

const withTheme = (Component: any) => {
  const theme = "light";

  const WithThemeComponent = (props: any) => {
    useEffect(() => {
      const handleBackPress = () => {
        if (props.route.name === "Login") {
          BackHandler.exitApp();
          return false;
        } else {
          props.navigation.goBack();
          return true;
        }
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        handleBackPress
      );

      return () => {
        backHandler.remove();
      };
    }, [props.route.name, props.navigation]);

    return <Component {...props} theme={theme} />;
  };

  return WithThemeComponent;
};

export default withTheme;
