import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Cashier1 = ({ onBackPress }) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
        <Image
          source={require('../../assets/icon/ArrowPointingLeft.png')}
          style={styles.backButtonImage}
        />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Cashier</Text>
      </View>
      <View style={styles.separator}></View>
    </View>
  );
}

export default Cashier1;

const styles = StyleSheet.create({
  navbar: {
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
  },
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
  titleContainer: {
    flex: 1,
  },
  title: {
    height: 27,
    top: 30,
    left: '50%',
    marginLeft: -36,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    color: '#303B3B',
    fontFamily: 'Poppins-SemiBold',
  },
  separator: {
    position: 'absolute',
    top: 64,
    left: 30,
    width: 345,
    height: 1,
    backgroundColor: '#ABABA7',
    opacity: 0.38,
  },
});
