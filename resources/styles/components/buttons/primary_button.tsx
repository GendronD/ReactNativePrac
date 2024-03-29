import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

export const primaryButtonStyle = StyleSheet.create<{
  button: ViewStyle;
  label: TextStyle;
}>({
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    width: '80%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  label: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default primaryButtonStyle;
