import React, { useRef } from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import colors from "../config/config-colors";
import { slides } from "../_main/_main-data";
import { Button } from "../component/comp-button";
import { _getData, _storeData } from "../config/config-localstore";
import { Slide, SlideItem } from "../component/comp-slide";
import Screen from "../component/comp-screen";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

const OnBoarding = () => {
  const route = useRouter();
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = useRef<FlatList<SlideItem>>(null);

  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: "space-between",
          //   paddingHorizontal: 20,
        }}
      >
        {/* Indicator container */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            // marginTop: 20,
          }}
        >
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: colors.purple,
                  width: 20,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{ marginBottom: 40 }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{ height: 60 }}>
              <Button
                title={"Get Started"}
                onPress={() => {
                  _storeData("isOnboarding", true);
                  route.replace("login");
                }}
                viewStyle={undefined}
                buttonStyle={undefined}
                titleStyle={undefined}
                isLoading={undefined}
                disabled={undefined}
              />
            </View>
          ) : (
            <View
              style={{
                flexDirection: "row",
                // borderWidth: 1,
                alignSelf: "center",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  {
                    // borderWidth: 1,
                    backgroundColor: "transparent",
                  },
                ]}
                onPress={skip}
              >
                <Text
                  style={{
                    // fontWeight: 'bold',
                    fontSize: 20,
                    color: colors.purple,
                  }}
                >
                  Skip
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <Screen>
      <StatusBar backgroundColor={"#fff"} />
      <FlatList
        alwaysBounceVertical={false}
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{
          borderWidth: 1,
          height: Platform.OS === "ios" ? height * 0.65 : height * 0.75,
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </Screen>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: 10,
    width: 10,
    backgroundColor: colors.lightgray,
    marginHorizontal: 3,
    borderRadius: 5,
  },
});
export default OnBoarding;
