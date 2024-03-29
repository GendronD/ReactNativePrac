import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface ActionButtonProps {
  label: string;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  onPress,
  buttonStyle,
  labelStyle,
}) => {
  if (!buttonStyle && !labelStyle) {
    return;
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={labelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
