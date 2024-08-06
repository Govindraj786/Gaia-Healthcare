import { Tabs } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="content" />
      <Tabs.Screen name="nipt" />
      <Tabs.Screen name="track" />
    </Tabs>
  );
};

export default _layout;
