/* eslint-disable no-undef */
import React, {
  lazy, Suspense, useEffect, useState
} from 'react';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

const Routes = lazy(() => import('./src/Routes'));

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        MontserratRegular: require('./src/Assets/Fonts/Montserrat-Regular.ttf'),
        MontserratMedium: require('./src/Assets/Fonts/Montserrat-Medium.ttf'),
        MontserratBold: require('./src/Assets/Fonts/Montserrat-Bold.ttf')
      });
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Suspense fallback={<Text>Loading...</Text>}>
        <Routes />
      </Suspense>
      <StatusBar style='light' />
    </>
  );
}
