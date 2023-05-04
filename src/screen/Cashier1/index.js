import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Cashier1 = ({ onBackPress }) => {
  return (
    <View style={styles.navbar}>
      {/* <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
        <Image
          source={require('./path/to/your/image.png')}
          style={styles.backButtonImage}
        />
      </TouchableOpacity> */}
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
    fontColor: '#303B3B',
    flexDirection: 'row',
    alignItems: 'center',
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
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    color: '#303B3B',
  },
  separator: {
    position: 'absolute',
    top: 64,
    left: 45,
    width: 315,
    height: 1,
    backgroundColor: '#ABABA7',
    opacity: 0.38,
  },
});
