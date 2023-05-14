import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap} from '../../components'

const Cashier = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.teks}>Halaman Cashier</Text>
    
    </View>
  )
}

export default Cashier

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  teks: {
    paddingBottom: 15,
  },
})