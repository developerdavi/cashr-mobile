import { Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Storage = {
  setItem: (key, value) => {
    if (Platform.OS === 'web') {
      // eslint-disable-next-line no-undef
      return localStorage.setItem(key, value);
    }

    return AsyncStorage.setItem(key, value);
  },

  getItem: (key) => {
    if (Platform.OS === 'web') {
      // eslint-disable-next-line no-undef
      return localStorage.getItem(key);
    }

    return AsyncStorage.getItem(key);
  },

  removeItem: (key) => {
    if (Platform.OS === 'web') {
      // eslint-disable-next-line no-undef
      return localStorage.removeItem(key);
    }

    return AsyncStorage.removeItem(key);
  }
};

export default Storage;
