import React from 'react';
import { View } from 'react-native';
import styles from '../Styles/Styles';

/**
 * A container
 * @param {object} props Props
 * @param {import('react-native').ViewStyle} props.style
 */
export default function Container({
  children,
  center,
  verticalCenter,
  marginTop,
  style
}) {
  return (
    <View
      style={[
        styles.container,
        center && { alignItems: 'center' },
        verticalCenter && { justifyContent: 'center', flex: 1 },
        marginTop && { marginTop },
        style && { ...style }
      ]}
    >
      {children}
    </View>
  );
}
