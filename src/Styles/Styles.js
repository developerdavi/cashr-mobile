import { Constants } from 'react-native-unimodules';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  paragraph: {
    fontFamily: 'MontserratRegular',
    fontSize: 18,
    color: '#A5FFD6'
  },

  title: {
    fontFamily: 'MontserratBold',
    fontSize: 24,
    color: '#A5FFD6'
  },

  bigTitle: {
    fontFamily: 'MontserratBold',
    fontSize: 32,
    color: '#A5FFD6'
  },

  textCenter: {
    textAlign: 'center'
  },

  orange: {
    color: '#FE5D26'
  },

  green: {
    color: '#00B806'
  },

  yellow: {
    color: '#FCBA04'
  },

  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: 'transparent'
  },

  center: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  wrapper: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#02182B',
    flex: 1
  },

  barButton: {
    width: '100%',
    marginBottom: 20,
    padding: 10,
    paddingHorizontal: 20,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 25
  },

  backButtonArrow: {
    height: 32,
    width: 32
  },

  textInputComponent: {
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
    fontSize: 18,
    paddingBottom: 5,
    marginBottom: 24,
    fontFamily: 'MontserratMedium',
    color: '#fff'
  },

  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: '#FE5D26',
    width: 72,
    height: 72
  },
});

export default styles;
