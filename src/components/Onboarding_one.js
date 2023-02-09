/* eslint-disable prettier/prettier */
import * as React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import onBoarding1 from '../images/onBoarding1.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Onboarding_one = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ViewComponentsstyle}>
        <Image style={styles.LogoStyles} source={onBoarding1} />
        <Text style={styles.TextStyle}>Feeling illness?</Text>
        <Text style={styles.TextStyle}>Feeling illness?</Text>
        <Text style={styles.TextStyle}>Worried to travel and consult a</Text>
        <Text style={styles.TextStyle}>doctor due to the pandemic?</Text>
      </View>
      <Pressable style={styles.buttonStyles}>
        <MaterialIcons style={{fontSize: 40}} name={'keyboard-arrow-right'} />
      </Pressable>
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
  buttonStyles: {
    backgroundColor: 'lightgrey',
    alignSelf: 'flex-end',
    right: 35,
    borderRadius: 25,
    top: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Onboarding_one;
