import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../Styles/Styles';

import arrowLeft from '../Assets/Images/arrow-left.png';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={navigation.goBack}
      style={{ flex: -1 }}
    >
      <Image source={arrowLeft} style={styles.backButtonArrow} resizeMethod='resize' resizeMode='center' />
    </TouchableOpacity>
  );
};

export default BackButton;
