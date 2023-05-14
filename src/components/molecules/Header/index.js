import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { UC } from '../../../assets/icons';

const Header = () => {
  return (
    <View>
      <LinearGradient
        style={styles.bulatan}
        colors={['#541690', 'rgba(118, 53, 181, 0.66)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 1]}
      />
      <UC style={styles.uc} />
    </View>
    
  )
}

export default Header

const styles = StyleSheet.create({
  bulatan:{
    width: 500,
    height: 500,
    borderRadius: 250,
    //backgroundColor: '#541690' ,
    left: -80,
    top: -220,

  },
  uc:{
    position: 'absolute',
    top:80,
    left: 170,
   }
})