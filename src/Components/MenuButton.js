import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import bars from '../Assets/Images/bars-solid.png';

const MenuButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={navigation.openDrawer}
      style={{ flex: -1 }}
    >
      <Image source={bars} style={{ top: 1, height: 24, width: 24 }} />
    </TouchableOpacity>
  );
};

export default MenuButton;
