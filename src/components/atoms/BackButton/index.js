import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { BackArrow } from '../../../assets';

const BackButton = ({ onBackPress }) => {
  return (
      <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
        <BackArrow style={styles.backButtonImage}/>
      </TouchableOpacity>
  );
}

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    width: 25,
    height: 25,
    left: 30,
    top: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});