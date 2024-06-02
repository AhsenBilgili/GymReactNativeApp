import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const CustomButton = ({ title, handlePress, containerStyle, textStyle, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
      style={[styles.button, containerStyle]}
    >
      <Text style={[styles.buttonText, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#04364A',
    paddingVertical: 10, 
    borderRadius: 18,
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '100%', 
    

  },
  buttonText: {
    color: '#fff',
    fontSize: 16, 
    fontWeight: 'bold', 
  },
});

export default CustomButton;
