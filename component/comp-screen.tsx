import React from 'react';
import {StyleSheet, SafeAreaView, Platform, StatusBar} from 'react-native';
interface ScreenProps {
  children: React.ReactNode;
}

const Screen: React.FC<ScreenProps> = ({children}) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};
const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});

export default Screen;
