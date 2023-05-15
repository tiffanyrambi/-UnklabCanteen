import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('SignIn');
        }, 3000);
    }, []);

    return (
        <LinearGradient
            colors={['#541690', '#FFFFFF']}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 2}}
            style={styles.container}>
            <Text style={styles.text1}>Unklab</Text>
            <Text style={styles.text2}>Canteen</Text>
        </LinearGradient>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
      
    text1: {
        fontSize: 40,
        fontFamily: 'MajorMonoDisplay-Regular',
        color: 'white',
        margin: 1,
        paddingLeft: 50,
        paddingRight: 110,
    },
    text2: {
        fontSize: 40,
        fontFamily: 'MajorMonoDisplay-Regular',
        color: 'white',
        paddingLeft: 110,
        paddingRight: 50,
    },
});