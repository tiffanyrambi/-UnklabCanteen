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
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => handleOptionSelect('Crystal')}
          >
            <Text style={styles.optionText}>Crystal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => handleOptionSelect('Edelweiss')}
          >
            <Text style={styles.optionText}>Edelweiss</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => handleOptionSelect('Genset')}
          >
            <Text style={styles.optionText}>Genset</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => handleOptionSelect('Guest House')}
          >
            <Text style={styles.optionText}>Guest House</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => handleOptionSelect('Jasmine 1')}
          >
            <Text style={styles.optionText}>Jasmine 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => handleOptionSelect('Jasmine 2')}
          >
            <Text style={styles.optionText}>Jasmine 2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => handleOptionSelect('Study Garden')}
          >
            <Text style={styles.optionText}>Study Garden</Text>
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
    paddingLeft: 10,
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
    marginTop: 5,
    borderRadius: 5,
  },
  
  optionButton: {
    height: 44,
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 22, 
    backgroundColor: '#FFCD38',
    
  },
  optionText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 10,
  },
});

export default DropdownButton;
