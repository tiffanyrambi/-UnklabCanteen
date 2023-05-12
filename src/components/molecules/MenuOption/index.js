import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { Button, TextInput } from '../../atoms';

const MenuOption = ({title, harga}) => {
  return (
    <View style={styles.container}> 
        <View style={{flex:1, flexDirection:"row"}}>
            <View style={{flex:1, backgroundColor:"yellow",margin:3}}></View>
            <View style={{flex:1, backgroundColor:"yellow",margin:3}}>
                <View>
                    <Text>{title}</Text>
                    <Text>{harga}</Text>
                </View>
            </View>
            <View style={{flex:1, backgroundColor:"yellow",margin:3}}>
                <Button/>
            </View>
        </View>
        
        <View style={{flex:3, flexDirection:"row"}}></View>
    </View>
  );
};

export default MenuOption;

const styles = StyleSheet.create({
    container: {
        flex:1,
        // padding:30,
      },
});