/* eslint-disable prettier/prettier */
import * as React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import onBoarding3 from '../images/onBoarding3.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Onboarding_three = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ViewComponentsstyle}>
        <Image style={styles.LogoStyles} source={onBoarding3} />
        <Text style={styles.TextStyle}>Feeling illness?</Text>
        <Text style={styles.TextStyle}>Feeling illness?</Text>
        <Text style={styles.TextStyle}>Worried to travel and consult a</Text>
        <Text style={styles.TextStyle}>doctor due to the pandemic?</Text>
      </View>
      <View style={styles.ButtonsViewStyle}>
        <Pressable style={styles.registerbuttonStyles}>
          <Text style={styles.registerTextStyles}>Register</Text>
        </Pressable>
        <Pressable style={styles.loginbuttonStyles}>
          <Text style={styles.loginTextStyles}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  LogoStyles: {
    width: 300,
    height: 300,
  },
  TextStyle: {
    fontSize: 18,
    fontWeight: '400',
    color: '#200A4D',
  },
  ViewComponentsstyle: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerbuttonStyles: {
    width: '30%',
    height: '100%',
    backgroundColor: '#E19538',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerTextStyles: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  ButtonsViewStyle: {
    width: '100%',
    height: '5.5%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    top: '13%',
  },
  loginbuttonStyles: {
    width: '30%',
    height: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#E19538',
  },
  loginTextStyles: {
    color: '#E19538',
    fontSize: 17,
    fontWeight: '600',
  },
});

export default Onboarding_three;
