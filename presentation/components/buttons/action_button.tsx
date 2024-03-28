import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  // StyleSheet,
  // TextStyle,
} from 'react-native';

interface ActionButtonProps {
  label: string;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  // labelStyle?: StyleProp<TextStyle>;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  onPress,
  buttonStyle,
  // labelStyle,
}) => {
  if (!buttonStyle) {
    return;
  }

  //   const styles = StyleSheet.create({
  //     button: buttonStyle!,
  //   });

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={buttonStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
// style={[labelStyle]}
