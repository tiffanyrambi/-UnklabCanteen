import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import BackButton from '../../atoms/BackButton';
import DropdownButton from '../../molecules/Dropdown';

const Cashier1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <BackButton/>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Cashier</Text>
        </View>
        <View style={styles.separator}></View>

        <DropdownButton/>
      </View>
    </View>
  );
}

export default Cashier1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAF5',
  },
  navbar: {
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
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
