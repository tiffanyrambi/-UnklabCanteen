import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import React from 'react';

const Buttom = ({title, color  = '#541690', textColor ='#020202',onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.button(color)}>
            <Text style={styles.text(textColor)}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
};

export default Buttom;

const styles = StyleSheet.create({

  button: (color) =>( {
    backgroundColor: color,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal:50 ,
  }),
  text: (textColor) => ({
    color: textColor,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
  }),
});