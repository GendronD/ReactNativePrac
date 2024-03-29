import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

export const secondaryButtonStyle = StyleSheet.create<{
  button: ViewStyle;
  label: TextStyle;
}>({
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '80%',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'blue',
  },
  label: {
    alignItems: 'center',
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default secondaryButtonStyle;
