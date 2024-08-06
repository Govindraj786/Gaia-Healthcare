import AsyncStorage from "@react-native-async-storage/async-storage";

export async function _storeData(propName: string, data: any) {
  await AsyncStorage.setItem(propName, JSON.stringify(data));
}

export async function _getData(propName: string) {
  let val: any = await AsyncStorage.getItem(propName);
  return JSON.parse(val);
}
export async function _deleteData(key: string) {
  await AsyncStorage.removeItem(key);
  return true;
}
