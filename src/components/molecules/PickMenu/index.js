import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const PickMenu = () => {
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(13000);

  const handleMinus = () => {
    if (count > 1) {
      setCount(count - 1);
      setTotalPrice(totalPrice - 13000);
    }
  };

  const handlePlus = () => {
    setCount(count + 1);
    setTotalPrice(totalPrice + 13000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemText}>Tempe Penyet</Text>
        <View style={styles.totalPrice}>
          <Text style={styles.itemPrice}>{totalPrice}</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.buttonLeft} onPress={handleMinus}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.count}> {count} </Text>
          <TouchableOpacity style={styles.buttonRight} onPress={handlePlus}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.separator2}></View> 
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalPrice}>{totalPrice}</Text>
      </View>
      </View>
  );
};

export default PickMenu;

const styles = StyleSheet.create({
  container: {
  },
  item: {
    position: 'absolute',
    width: 345,
    height: 44,
    left: 40,

    zIndex: -1,
  },
  itemText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  itemPrice: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#541690',
  },
  buttons: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    width: 70,
    right: 25,
  },
  buttonLeft: {
    width: 25,
    height: 25,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#541690',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFDFD',
  },
  buttonRight: {
    width: 25,
    height: 25,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#541690',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFDFD',
    marginLeft: 5,
  },
  buttonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#541690',
  },
  count: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5,
    marginRight: 5,
  },
  item: {
    position: 'absolute',
    width: 345,
    height: 44,
    left: 40,
    top: 264,
    zIndex: -1,
  },
  itemText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  itemPrice: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#541690',
  },
  buttons: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    width: 70,
    right: 25,
  },
  separator2: {
    position: 'absolute',
    bottom: 20,
    left: 30,
    width: 345,
    height: 1,
    backgroundColor: '#ABABA7',
    opacity: 0.38,
    marginTop: 20,
    top: 530, 
    marginVertical: 20,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 345,
    marginTop: 20,
    alignSelf: 'center',
    paddingHorizontal: 30,
    paddingBottom: 20,
    top: 550, 
  },
  totalText: {
    fontFamily: 'Poppins-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    color: '#303B3B',
    textDecorationLine: 'none',
  },
  totalPrice: {
    fontFamily: 'Poppins-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    color: '#303B3B',
    textAlign: 'right',
    justifyContent: 'flex-end',
    textDecorationLine: 'none',
  },
  
});