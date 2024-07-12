import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => {
  return (
    <Pressable style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0EA5E9',
    height: 45,
    width:150,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    alignSelf: 'center', 
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CustomButton;
