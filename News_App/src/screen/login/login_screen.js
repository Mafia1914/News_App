import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconTextInput from '../components/IconTextInput';
import CustomButton from '../components/custom_button'; // Assuming this is your custom button component
import { handleLogin } from '../login/login_screen_logic';
import SignupScreen from '../signup/signup_screen';
const logo = require("../../../assets/app_logo.png");

const LoginScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSignupPress = () => {
    navigation.navigate('SignupScreen');
  };

  const handleForgotPassword = () => {
    console.log('Forgot password pressed');
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
              // iconSource={require('../assets/email_icon.png')}
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
              // iconSource={require('../../../assets/password_icon.png')}
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

          <Pressable onPress={handleForgotPassword} style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </Pressable>

          <CustomButton
            title="Sign in"
            onPress={() => handleLogin(username, password, navigation, setUsernameError, setPasswordError)}
            buttonStyle={{ marginBottom: 20 }} 
          />

          <Text style={styles.optionsText}>or sign in with</Text>

          <Pressable onPress={handleSignupPress}>
            <Text style={styles.signup}>Don't Have Account? Sign Up</Text>
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
     marginBottom:15,
    color: '#000000',
    fontSize: 14,

  },
});

export default LoginScreen;
