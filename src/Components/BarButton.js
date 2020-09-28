import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../Styles/Styles';

const BarButton = ({
  title,
  color,
  borderColor,
  textColor,
  onPress = () => {}
}) => (
  <TouchableOpacity
    style={[
      styles.barButton,
      { alignItems: 'center' },
      color && { backgroundColor: color },
      borderColor && { borderColor }
    ]}
    onPress={onPress}
  >
    <Text style={[
      styles.paragraph,
      { color: textColor, fontWeight: 'bold' }]}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

export default BarButton;
