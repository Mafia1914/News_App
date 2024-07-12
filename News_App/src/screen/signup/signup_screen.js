import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconTextInput from '../components/IconTextInput';
import CustomButton from '../components/custom_button'; // Assuming this is your custom button component
const logo = require("../../../assets/app_logo.png");

const SignupScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSignupPress = () => {
    navigation.navigate('SignupScreen');
  };


  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <SafeAreaView>
          <Image source={logo} style={styles.image} resizeMode='contain' />
          <Text style={styles.title}>
            <Text style={styles.firstLine}>Welcome Back to DO IT</Text>{'\n'}
            <Text style={styles.secondLine}>Have another productive day!</Text>
          </Text>
          <View style={styles.inputView}>
            <IconTextInput
              placeholder='Username'
              value={username}
              onChangeText={(text) => {
                setUsername(text);
                setUsernameError("");
              }}
              secureTextEntry={false}
              error={usernameError}
            />
            <IconTextInput
              placeholder='Email'
              value={username}
              onChangeText={(text) => {
                setUsername(text);
                setUsernameError("");
              }}
              secureTextEntry={false}
              error={usernameError}
            />
            {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}
            <IconTextInput
              placeholder='phonenumber'
              value={username}
              onChangeText={(text) => {
                setUsername(text);
                setUsernameError("");
              }}
              secureTextEntry={false}
              error={usernameError}
            />
            <IconTextInput
              placeholder='Password'
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setPasswordError("");
              }}
              secureTextEntry={true}
              error={passwordError}
              onIconRightPress={() => {}}
            />
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
          </View>
          <View><Text  style={styles.iamtext}>i am a</Text></View>
          <View style={styles.radioButtons}>
            <Pressable
              style={[styles.radioButton, selectedOption === 'medium_report' ? styles.radioButtonSelected : null]}
              onPress={() => handleOptionPress('medium_report')}
            >
              {selectedOption === 'medium_report' && <Text style={styles.radioButtonIcon}>✓</Text>}
            </Pressable>
            <Text style={styles.radioButtonText}>Medium Report</Text>
       
            <Pressable
              style={[styles.radioButton, selectedOption === 'visitor' ? styles.radioButtonSelected : null]}
              onPress={() => handleOptionPress('visitor')}
            >
              {selectedOption === 'visitor' && <Text style={styles.radioButtonIcon}>✓</Text>}
            </Pressable>
            <Text style={styles.radioButtonText}>Visitor</Text>
          </View>

          <CustomButton
            title="Sign Up"
            onPress={() => handleLogin(username, password, navigation, setUsernameError, setPasswordError)}
            buttonStyle={{ marginBottom: 20 }} 
          />

          <Text style={styles.optionsText}>Choose Account Type:</Text>

          <Pressable onPress={handleSignupPress}>
            <Text style={styles.signup}>Already have an account? Sign In</Text>
          </Pressable>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  image: {
    height: 120,
    width: 200,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 40,
    color: "white",
    marginBottom: 10,
  },
  inputView: {
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 20, // Adjusted spacing between inputs and forgot password
  },
  errorText: {
    fontSize: 12,
    color: "red",
  },
  optionsText: {
    textAlign: "center",
    paddingVertical: 10,
    color: '#000000',
    fontSize: 14,
    marginBottom: 6,
  },
  signup: {
    color: '#000000',
    fontSize: 13,
    textAlign: "center",
    marginTop: 10,
  },
  firstLine: {
    marginBottom: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginRight: 40, 
  },
  forgotPasswordText: {
    marginBottom: 15,
    color: '#000000',
    fontSize: 14,
  },
  radioButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  radioButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 50,
    height: 24,
    width: 24,
    marginRight: 10,
    marginBottom:20,
    marginLeft:10,
  },
  radioButtonSelected: {
    backgroundColor: '#0EA5E9',
  },
  radioButtonText: {
    fontSize: 16,
    marginRight: 8,
    marginLeft:5,
  },
  radioButtonIcon: {
    color: 'white',
    fontSize: 16,
  },
  iamtext:{
    marginLeft:45,
    marginBottom:10,
  }
});

export default SignupScreen;
