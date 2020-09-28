import React from 'react';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../Styles/Styles';

import arrowRight from '../Assets/Images/arrow-right.png';

export default function SubmitButton({
  color,
  onPress = () => {},
  loading
}) {
  return (
    <TouchableOpacity
      style={[
        styles.submitButton,
        color && { backgroundColor: color },
        loading && { backgroundColor: '#ccc' }
      ]}
      onPress={onPress}
      disabled={loading}
    >
      <Image source={arrowRight} style={styles.backButtonArrow} resizeMethod='resize' resizeMode='center' />
    </TouchableOpacity>
  );
}
