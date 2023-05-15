import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TIMainMenu= () => {
  return (
    <View>
      <Text  style={styles.text}>{title}</Text>
      <TextInputRN style={styles.input} placeholder={placeholder} {...rest}/>
    </View>
  )
}

export default TIMainMenu

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: 'black',
        marginBottom: 6,
    },
    input:{
        borderWidth: 1,
        borderColor: '#020202',
        borderRadius: 8,
        paddingLeft: 10,
        paddingHorizontal: 10,
    }
})