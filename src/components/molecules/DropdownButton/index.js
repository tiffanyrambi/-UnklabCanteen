import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';

const DropdownButton = ({onPress}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState({ label: '-- Select Place --', value: null });
  const [isPlaceSelected, setIsPlaceSelected] = useState(false);
  const [asramaOptions, setAsramaOptions] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.183.52:1500/asrama')
      .then(response => {
        const options = response.data.data.map(asrama => ({
          label: asrama.asrama,
          value: asrama._id
        }));
        setAsramaOptions(options);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handlePress = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
    setIsPlaceSelected(true);
  };

  return (
    <View style={[styles.container, { zIndex: showOptions ? 3 : 0 }]}>
      <View style={isPlaceSelected ? styles.selectedContainer : null}>
        <Text style={styles.location}>Location</Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>{selectedOption.label}</Text>
          <View style={styles.arrowDown}></View>
        </TouchableOpacity>
        {showOptions && (
          <View style={styles.options}>
            {asramaOptions.map(option => (
              <TouchableOpacity
                key={option.value}
                style={styles.optionButton}
                onPress={() => handleOptionSelect(option)}
              >
                <Text style={styles.optionText}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
      <TouchableOpacity
        style={[styles.confirmButton, { opacity: selectedOption.value === null ? 0.5 : 1 }]}
        disabled={selectedOption.value === null} onPress={onPress}>
        <Text style={styles.confirmButtonText}>CONFIRM</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DropdownButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 345,
    height: 755,
    left: 30,
    top: 120,
    justifyContent: 'space-between',
  },
  location: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    color: '#303B3B',
    fontFamily: 'Poppins-SemiBold',
  },
  button: {
    backgroundColor: 'white',
    height: 44,
    width: 345,
    borderRadius: 22,
    paddingHorizontal: 10,
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
    borderLeftWidth: 5,
    borderLeftColor: 'transparent',
    borderRightWidth: 5,
    borderRightColor: 'transparent',
    borderTopWidth: 5,
    borderTopColor: 'black',
    marginRight: 10,
  },
  options: {
    marginTop: 5,
    borderRadius: 5,
  },
  optionButton: {
    height: 44,
    width: 345,
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 22,
    backgroundColor: '#FFCD38',
  },
  optionText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: 'black',
    paddingLeft: 10,
  },
  confirmButton: {
    backgroundColor: '#FFCD38',
    height: 44,
    width: 345,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
  },

  confirmButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
});