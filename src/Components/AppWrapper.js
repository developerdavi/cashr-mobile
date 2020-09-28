import React from 'react';
import { View } from 'react-native';
import styles from '../Styles/Styles';

export default function AppWrapper({ children }) {
  return (
    <View style={styles.wrapper}>
      {children}
    </View>
  );
}
