/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import {RadioButton, Checkbox} from 'react-native-paper';
const PatientRegister = () => {
  const [checked, setChecked] = React.useState('first');
  const textInput = (title, placeholderName) => {
    return (
      <>
        <TextInput
          style={styles.inputFieldsStyles}
          placeholder={placeholderName}
          placeholderTextColor="#fff"
        />
      </>
    );
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          justifyContent: 'space-evenly',
        }}>
        <View style={styles.radioStyles}>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            color="#E19538"
          />
          <Text style={styles.radiotTextStyles}>Patient</Text>
        </View>
        <View style={styles.radioStyles}>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
          <Text style={styles.radiotTextStyles}>Doctor</Text>
        </View>
      </View>

      <View style={styles.card}>
        {textInput('First Name')}
        {textInput('Vishnu')}
        {textInput('First Name')}
        {textInput('First Name')}
        {textInput('First Name')}
        {textInput('First Name')}
        {textInput('First Name')}
      </View>

      <View style={styles.termsViewStyles}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            console.log('ready');
          }}
        />
        <Text style={styles.termsTextStyle}>
          By login to this, I agree to
          <Text style={{color: '#E19538'}}> Terms and Conditions</Text>{' '}
        </Text>
      </View>

      <Pressable style={styles.pressableStyles}>
        <Text style={styles.pressabletextStyles}>Register</Text>
      </Pressable>

      <Text style={styles.loginTextStyles}>
        Already have an account ?
        <Text style={{color: '#E19538'}}> Login now.</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  radioStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '25%',
  },
  radiotTextStyles: {
    fontSize: 18,
    fontWeight: '400',
  },
  inputFieldsStyles: {
    width: '90%',
    height: '9%',
    borderWidth: 1.5,
    borderColor: '#E19538',
    borderRadius: 10,
  },
  card: {
    width: '100%',
    height: '70%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  termsTextStyle: {
    color: '#4D4D4D',
    fontSize: 14,
    fontWeight: '400',
  },
  termsViewStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '90%',
  },
  pressableStyles: {
    width: '90%',
    height: '6%',
    backgroundColor: '#E19538',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    top: '3%',
  },
  pressabletextStyles: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  loginTextStyles: {
    fontSize: 16,
    fontWeight: '400',
    top: '7%',
    color: '#000',
  },
});

export default PatientRegister;
