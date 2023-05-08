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
      </TouchableOpacity>
      {showOptions && (
        <View style={styles.options}>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => handleOptionSelect('Annex')}
          >
            <Text style={styles.optionText}>Annex</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => handleOptionSelect('Bougenville')}
          >
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
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 22,
  },
  buttonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    fontWeight: 'bold',
  },
  options: {
    backgroundColor: '#FFCD38',
    marginTop: 5,
    borderRadius: 5,
  },
  optionButton: {
    height: 44,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  optionText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default DropdownButton;
