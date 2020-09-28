import { Alert as NativeAlert, Platform } from 'react-native';

export default function Alert(text) {
  if (Platform.OS === 'web') {
    // eslint-disable-next-line no-undef
    alert(text);
  } else {
    NativeAlert.alert(text);
  }
}
