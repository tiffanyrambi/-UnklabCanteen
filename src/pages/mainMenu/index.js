import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap} from '../../components'

const MainMenu = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.teks}>Halaman Menu2</Text>
      
      <Button 
          title="Menu" 
          // color="#8D92A3" 
          // textColor="white" 
          onPress={() => navigation.navigate('Menu1')}
          
        />
    </View>
  )
}

export default MainMenu

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  teks: {
    paddingBottom: 15,
  },
})