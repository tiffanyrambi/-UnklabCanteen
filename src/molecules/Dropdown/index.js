import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const DropdownButton = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('-- Select Place --');

  const handlePress = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.location}>Location</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>{selectedOption}</Text>
        <View style={styles.arrowDown}></View>
      </TouchableOpacity>
      {showOptions && (
        <View style={styles.options}>
          <TouchableOpacity
            style={[styles.optionButton, {borderRadius: 10, backgroundColor: '#FFCD38'}]}
            onPress={() => handleOptionSelect('Annex')}
          >
            <Text style={styles.optionText}>Annex</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.optionButton, {borderRadius: 10, backgroundColor: '#FFCD38'}]}
            onPress={() => handleOptionSelect('Bougenville')}
          >
            <View/>
            <Text style={styles.optionText}>Bougenville</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 345,
    height: 44,
    left: 30,
    top: 120,
  },
  location: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    left: 10,
    color: '#303B3B',
    fontFamily: 'Poppins-SemiBold',
  },
  button: {
    backgroundColor: 'white',
    height: 44,
    paddingHorizontal: 10,
    borderRadius: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    fontWeight: 'bold',
  },
  arrowDown: {
    width: 0,
    height: 0,
    right: 10,
    borderLeftWidth: 5,
    borderLeftColor: 'transparent',
    borderRightWidth: 5,
    borderRightColor: 'transparent',
    borderTopWidth: 5,
    borderTopColor: 'black',
    marginLeft: 5,
  },
  options: {
    backgroundColor: '#EAEAF5', 
    marginTop: 5,
    borderRadius: 5,
  },
  
  optionButton: {
    height: 44,
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  optionText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default DropdownButton;
