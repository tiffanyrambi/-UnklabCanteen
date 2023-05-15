import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from 'react-native'
import React, { useState }  from 'react'
import { Button, HeaderMenu, TextInput, Gap, MenuOption} from '../../components'
import Menu from '../../components/molecules/Menu'
import { Midal, TempePenyet, mieCakalang, nasiAyam, nasiGorengRoa, nasiKuning } from '../../assets'
import { Screen } from 'react-native-screens'

const Home = ({navigation}) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.name === item.name);
    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    setTotalItems(totalItems + 1);
    setTotalPrice(totalPrice + parseFloat(item.price));
  };

  const handleRemoveFromCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.name === item.name);
    if (existingItem.quantity === 1) {
      const updatedCartItems = cartItems.filter((cartItem) => cartItem.name !== item.name);
      setCartItems(updatedCartItems);
    } else {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      );
      setCartItems(updatedCartItems);
    }
  
    const removedItem = cartItems.find((cartItem) => cartItem.name === item.name);
    const removedItemPrice = parseFloat(removedItem.price.replace(/,/g, ''));
  
    setTotalItems(totalItems - 1);
    setTotalPrice(totalPrice - removedItemPrice);
  };
  
  
  

  const formatPriceToRupiah = (price) => {
    return price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  };

  return (
    <View style={styles.container}> 
      <ScrollView style={styles.menuContainer}>
        <HeaderMenu title="Food" onBack={() => navigation.goBack()}/>
        <Menu 
          imageSource={TempePenyet}
          name="Tempe Penyet"
          price="13000"
          onAddToCart={handleAddToCart}
          onSubtractFromCart={handleRemoveFromCart}
        />
        <Menu 
          imageSource={nasiAyam}
          name="Nasi Ayam"
          price="25000"
          onAddToCart={handleAddToCart}
          onSubtractFromCart={handleRemoveFromCart}
        />
        <Menu 
          imageSource={Midal}
          name="Midal Tinutuan"
          price="15000"
          onAddToCart={handleAddToCart}
          onSubtractFromCart={handleRemoveFromCart}
        />
        <Menu 
          imageSource={nasiGorengRoa}
          name="Nasi Goreng Roa"
          price="20000"
          onAddToCart={handleAddToCart}
          onSubtractFromCart={handleRemoveFromCart}
        />
        <Menu 
          imageSource={mieCakalang}
          name="Mie Cakalang"
          price="15000"
          onAddToCart={handleAddToCart}
          onSubtractFromCart={handleRemoveFromCart}
        />
        <Menu 
          imageSource={nasiKuning}
          name="Nasi Kuning"
          price="15000"
          onAddToCart={handleAddToCart}
          onSubtractFromCart={handleRemoveFromCart}
        />
      </ScrollView>

      {totalItems > 0 && (
        <View style={styles.cartContainer}>
          <TouchableOpacity onPress={()=>navigation.navigate('Cashier')} activeOpacity={0.7}>
            <View style={styles.cartItem}>
              <Text style={styles.cartTotalItems}>{totalItems} item</Text>
              <Text style={styles.cartTotalPrice}>{totalPrice}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex:1,
    //padding:30,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  menuContainer: {
    flex: 1,
  },
  cartContainer: {
    position: 'absolute',
    bottom: 20,
    left: 30,
    right: 30,
    padding: 10,
    backgroundColor: '#FFCD38',
    borderTopWidth: 1,
    borderTopColor: '#DDDDDD',
    borderRadius: 30,
    elevation: 5, 
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //marginBottom: 5,
  },
  cartTotalItems: {
    fontSize: 12,
    //marginBottom: 5,
    marginVertical: 5,
    left: 30,
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
  },
  cartTotalPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    right: 30,
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
  },
});
