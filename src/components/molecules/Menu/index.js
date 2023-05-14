import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Menu = ({ imageSource, name, price, onAddToCart, onSubtractFromCart}) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddItem = () => {
    setQuantity(quantity + 1);
    onAddToCart({ name, price });
  };

  const handleSubtractItem = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      onSubtractFromCart({ name, price });
    }
  };

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>

      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubtractItem}
          disabled={quantity === 0}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.quantity}>{quantity}</Text>

        <TouchableOpacity style={styles.button} onPress={handleAddItem}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 110,
    height: 110,
    marginRight: 18,
    borderRadius: 25,
    shadowRadius: 10,
  },
  textContainer: {
    flex: 1,
    bottom: 20,
  },
  name: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },
  price: {
    fontSize: 12,
    color: '#541690',
    fontFamily: 'Poppins-Regular',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 0,
  },
  button: {
    width: 25,
    height: 25,
    borderRadius: 15,
    backgroundColor: 'white',
    borderColor: '#541690',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 14,
    //fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
    color: '#541690',
  },
  quantity: {
    fontSize: 14,
    margin: 6,
  },
});

export default Menu;
