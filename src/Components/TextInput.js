import React from 'react';
import { TextInput as Input } from 'react-native';

import styles from '../Styles/Styles';

export default function TextInput({
  placeholder,
  type,
  value,
  onChange,
  password,
  ...props
}) {
  return (
    <Input
      placeholder={placeholder}
      placeholderTextColor='#ffffffcc'
      style={styles.textInputComponent}
      textContentType={type}
      secureTextEntry={password}
      value={value}
      onChangeText={onChange}
      autoCapitalize={type === 'emailAddress' ? 'none' : 'sentences'}
      {...props}
    />
  );
}
