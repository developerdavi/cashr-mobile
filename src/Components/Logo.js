import React from 'react';
import { Image } from 'react-native';

import logo from '../Assets/Images/logo.png';

export default function Logo() {
  return (
    <Image source={logo} style={{ width: 200, height: 100 }} resizeMethod='scale' resizeMode='contain' />
  );
}
