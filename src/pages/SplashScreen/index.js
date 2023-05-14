import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainMenu');
    }, 3000);
  }, []);

  return (
    <View style={styles.page}>
      <Text style={styles.text}>Unklab Canteen</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#541690',
        alignItems: 'center',
        justifyContent: 'center', 
    },
    text: {
        fontSize: 40,
        fontFamily: 'MajorMonoDisplay-Regular',
        color: 'white',
    }
})