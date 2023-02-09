/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import trevistaLogo from '../../images/trevistaLogo.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Doctor from '../../images/Doctor.png';

const DoctorLoginEmail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image source={trevistaLogo} style={styles.logoStyles} />
        <Ionicons style={styles.chatboxStyles} name="chatbox" />
      </View>
      <Text style={styles.textStyles}>Welcome {'\n'}Back Doctor!</Text>
      <View style={styles.card}>
        <View style={styles.box1}>
          <Text style={styles.cardtextStyles}>Login Using</Text>
          <Pressable style={styles.emailButtonStyles}>
            <Text style={styles.emailTextStyles}>Email Id</Text>
          </Pressable>
          <Text>or</Text>
          <Pressable style={styles.mobileButtonStyles}>
            <Text style={styles.mobileTextStyles}>Mobile No.</Text>
          </Pressable>
        </View>

        <View style={styles.box2}>
          <TextInput style={styles.inputFieldsStyles} placeholder="Email" />
          <TextInput style={styles.inputFieldsStyles} placeholder="Password" />
          <Pressable>
            <Text style={styles.forgetPasswordtextStyles}>
              Forgot Password?
            </Text>
          </Pressable>
        </View>

        <View style={styles.box3}>
          <Text style={styles.termsTextStyles}>
            By login to this, I agree to {'\n'}
            <Text style={{color: '#6AA446'}}>Terms and Conditions</Text>
          </Text>
          <Pressable style={styles.loginButtonStyles}>
            <Text style={styles.loginTextStyles}>Login</Text>
          </Pressable>
        </View>

        <Text style={styles.noAccountTextStyles}>
          Don’t have an account?
          <Text style={{color: '#6AA446'}}> Register now.</Text>
        </Text>

        <View style={styles.DoctorBox}>
          <View style={styles.DoctorBoxInsideViewSTyles}>
            <Text style={styles.DoctorBoxTextStyles1}>
              Looking For a Doctor?
            </Text>
            <Text style={styles.DoctorBoxTextStyles2}>
              <Text style={{color: '#6AA446'}}>Register</Text> yourself or{' '}
              <Text style={{color: '#6AA446'}}>Login</Text> here
            </Text>
          </View>
          <Image style={styles.doctorImageStyles} source={Doctor} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6AA446',
  },
  logoStyles: {
    width: 85,
    height: 125,
    top: '4%',
    left: '3%',
  },
  chatboxStyles: {
    top: 50,
    left: 20,
    fontSize: 70,
    color: '#fff',
  },
  textStyles: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
    lineHeight: 25,
    left: 100,
    top: -15,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 35,
    top: '2%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  //-------------------

  box1: {
    height: '10%',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  emailButtonStyles: {
    height: '80%',
    width: '25%',
    backgroundColor: '#6AA446',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileButtonStyles: {
    width: '25%',
    height: '80%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#6AA446',
  },
  emailTextStyles: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  mobileTextStyles: {
    color: '#6AA446',
    fontSize: 17,
    fontWeight: '600',
  },
  cardtextStyles: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },

  //---------------------

  box2: {
    height: '30%',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  inputFieldsStyles: {
    width: '100%',
    height: '30%',
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: '#6AA446',
  },
  forgetPasswordtextStyles: {
    fontSize: 14,
    fontWeight: '500',
  },

  //-----------------------

  box3: {
    height: '8%',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  termsTextStyles: {
    fontSize: 12,
    fontWeight: '400',
  },
  loginButtonStyles: {
    height: '100%',
    width: '35%',
    backgroundColor: '#6AA446',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginTextStyles: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  noAccountTextStyles: {
    fontSize: 17,
    fontWeight: '400',
    color: '#000',
  },

  //----------------------

  DoctorBox: {
    height: '20%',
    width: '90%',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  DoctorBoxInsideViewSTyles: {
    height: '70%',
    width: '60%',
    justifyContent: 'space-evenly',
    left: '5%',
  },
  DoctorBoxTextStyles1: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  DoctorBoxTextStyles2: {
    fontSize: 16,
    fontWeight: '500',
  },
  doctorImageStyles: {
    height: '100%',
    borderRadius: 20,
    shadowColor: 'green',
  },
});

export default DoctorLoginEmail;
