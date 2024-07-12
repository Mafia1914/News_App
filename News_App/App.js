import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screen/splash/splash_view';
import LoginScreen from './src/screen/login/login_screen';
import { View, StyleSheet} from 'react-native';
import SignupScreen from './src/screen/signup/signup_screen'
import BottomNavigationScreen from '../News_App/src/screen/bottom_navigation'
import DetailsScreen from './src/screen/home/Details_Screen'
import {store}from './src/services/redux_2/store'
import DemoApp from './src/screen/product/DemoApp';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store ={store}>
     <View style={styles.container}>
       <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignupScreen"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="DetailsScreen"
            component={DetailsScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen name="Bottom" component={BottomNavigationScreen} options={{ headerShown: false ,    tabBarHideOnKeyboard: true}} />
          {/* <Stack.Screen
            name="OnboardingScreen"
            component={OnboardingScreen}
            options={{ headerShown: false }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    </Provider>
   

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
