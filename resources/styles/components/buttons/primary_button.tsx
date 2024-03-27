import {StyleSheet, ViewStyle} from 'react-native';
// import {
//     TouchableOpacity,
//     Text,
//     StyleProp,
//     ViewStyle,
//     // StyleSheet,
//     // TextStyle,
//   } from 'react-native';

export const primaryButtonStyle = StyleSheet.create<{container: ViewStyle}>({
  container: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  label: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default primaryButtonStyle;
