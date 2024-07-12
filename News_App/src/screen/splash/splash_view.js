import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    let timeout; 

    const checkTokenAndLaunch = async () => {
      try {
        const token = await SecureStore.getItemAsync('token');


        if (token) {
          console.warn('Token found:', token);
          timeout = setTimeout(() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: 'Bottom' }],
              })
            );
          }, 1000); 
        } else {
         
          timeout = setTimeout(() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: 'LoginScreen' }],
              })
            );
          }, 5000); 
        }
      } catch (error) {
        console.error('Error during SplashScreen:', error);
      }
    };

 
    checkTokenAndLaunch();


    return () => {
      clearTimeout(timeout); 
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/app_logo.png')}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '50%',
    height: '50%',
    marginBottom: 20,
  },
});

export default SplashScreen;
