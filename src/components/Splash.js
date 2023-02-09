/* eslint-disable prettier/prettier */
import * as React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import trevistaLogo from '../images/trevistaLogo.png';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.LogoStyles} source={trevistaLogo} />
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
    width: '60%',
    height: '40%',
  },
});

export default Splash;
