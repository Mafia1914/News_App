import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import MaterialCommunityIcons

const IconTextInput = ({ iconSource, placeholder, value, onChangeText, secureTextEntry, error, onIconRightPress }) => {
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
        value={value}
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
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },

  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    color: 'black',
  },
  inputError: {
    borderColor: 'red',
  },
  iconRight: {
    position: 'absolute',
    right: 10,
  },
});

export default IconTextInput;
