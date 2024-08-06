import React, { useRef } from "react";
import { Image, View, Text, Dimensions } from "react-native";
import colors from "../config/config-colors";

const { width } = Dimensions.get("window");
export interface SlideItem {
  id: number;
  image: any;
  title: string;
  subtitle: string;
}

interface SlideProps {
  item: SlideItem;
}
export const Slide: React.FC<SlideProps> = ({ item }) => {
  return (
    <View
      style={{
        alignItems: "center",
        width: width,
        // borderWidth: 1,
        // marginLeft: Platform.OS === 'ios' ? item.id == 4 ? -40 : 0 : item.id == 4 ? -60 : 0,
        justifyContent: "center",
      }}
    >
      <Image
        source={item?.image}
        resizeMode={"contain"}
        style={{
          height: "70%",
          width: width,
        }}
      />
      <View>
        <Text
          style={{
            color: colors.red,
            fontSize: 22,
            fontWeight: "bold",
            marginTop: 20,
            textAlign: "center",
          }}
        >
          {item?.title}
        </Text>
        <Text
          style={{
            color: colors.black,
            fontSize: 15,
            marginTop: 10,
            maxWidth: "70%",
            textAlign: "center",
            lineHeight: 23,
          }}
        >
          {item?.subtitle}
        </Text>
      </View>
    </View>
  );
};
