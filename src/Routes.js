import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
} from '@react-navigation/drawer';
import { View } from 'react-native';

import FirstScreen from './Screens/FirstScreen';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';
import HomeScreen from './Screens/HomeScreen';
import styles from './Styles/Styles';
import Logo from './Components/Logo';

const Drawer = createDrawerNavigator();

const visibleItems = [
  'home'
];

const getVisible = (route) => visibleItems.includes(route.name);

function GetFilteredAndStyledItems({ state, ...other }) {
  return (
    <DrawerItemList
      state={{
        ...state,
        routes: state.routes.filter(getVisible)
      }}
      {...other}
    />
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.center}>
        <Logo />
      </View>
      <GetFilteredAndStyledItems {...props} />
      <DrawerItem
        label="Fechar"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={CustomDrawerContent}
        drawerContentOptions={{
          inactiveTintColor: '#fff',
          activeBackgroundColor: '#fff',
          activeTintColor: styles.wrapper.backgroundColor,
          style: {
            backgroundColor: styles.wrapper.backgroundColor
          }
        }}
      >
        <Drawer.Screen name="first-screen" options={{ gestureEnabled: false }} component={FirstScreen} />
        <Drawer.Screen name="signup" options={{ gestureEnabled: false }} component={SignupScreen} />
        <Drawer.Screen name="login" options={{ gestureEnabled: false }} component={LoginScreen} />
        <Drawer.Screen name="home" options={{ drawerLabel: 'Home' }} component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
