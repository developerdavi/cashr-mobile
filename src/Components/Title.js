import React from 'react';
import { Text } from 'react-native';
import styles from '../Styles/Styles';

export default function Title({
  children,
  align = 'left',
  color = '#fff',
  size = 36
}) {
  return (
    <Text
      style={[
        styles.title,
        { textAlign: align, color, fontSize: size }
      ]}
    >
      {children}
    </Text>
  );
}
