import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomHeader = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#05243E',
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
});

export default CustomHeader;
