import {Platform} from 'react-native';
export default {
  GAIAFont: Platform.OS === 'ios' ? 'Chalkboard SE' : 'Roboto',
};

export const FONT_FAMILY = {
  bold: 'Roboto-Bold',
  italic: 'Roboto-Italic',
  regular: 'Roboto-Regular',
  medium: 'Roboto-Medium',
};
