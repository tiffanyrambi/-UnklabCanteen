import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
import { Button, Header, TextInput, Gap, MenuOption } from '../../components'

const Menu1 = ({navigation}) => {
  return (
    <View style={styles.container}> 
      <Header title="Food"/>
      <MenuOption title="Tempe Penyet" harga="Rp13.000"/>
      
    </View>
  )
}

export default Menu1

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:30,
  }
});