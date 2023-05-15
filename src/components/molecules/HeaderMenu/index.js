import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { BackArrow } from '../../../assets';
import { Gap } from '../../atoms';

const HeaderMenu = ({title, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity onPress={onBack}>
          <View style={styles.back}>
            <BackArrow/>
          </View>
        </TouchableOpacity>
      )}
      
      <Gap width={130}/>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default HeaderMenu;

const styles = StyleSheet.create({
  container: {
    //paddingLeft: 24,
    //paddingVertical: 38,
    //backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ABABA7',
    borderBottomWidth: 1,
    paddingBottom: 7,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    alignItems: 'center',
    color: '#303B3B',
  },
  back: {
    //backgroundColor: 'yellow',
    //padding: 7,
  }
});