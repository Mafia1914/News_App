import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Profilefiled = ({ iconSource, placeholder, value, onChangeText, secureTextEntry, error, onIconRightPress }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.inputContainer}>
      <Image source={iconSource} style={styles.icon} />
      <TextInput
        style={[styles.input, error ? styles.inputError : null]}
        placeholder={placeholder}
        // value={value}
        onChangeText={onChangeText}
        secureTextEntry={!showPassword && secureTextEntry}
        autoCorrect={false}
        autoCapitalize='none'
      />
       
      {secureTextEntry && (
        <TouchableOpacity style={styles.iconRight} onPress={toggleShowPassword}>
          <MaterialCommunityIcons 
            name={showPassword ? 'eye-off' : 'eye'} 
            size={24} 
            color="#aaa"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#f8f8ff',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderRadius:100,
    borderBottomColor: 'gray',
    
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    color: 'black',
    marginLeft:10,
  },
  inputError: {
    borderColor: 'red',
  },
  iconRight: {
    position: 'absolute',
    right: 10,
  },
});

export default Profilefiled;
