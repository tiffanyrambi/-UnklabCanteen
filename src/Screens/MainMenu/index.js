import {StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {Gap} from '../../Components';
import {Drink, Food, List, Profile} from '../../Assets';

const MainMenu = ({navigation}) => {
    return (
        <View style={styles.page}>
        <View style={styles.header}>
            <List style={styles.list}/>
            <View style={styles.profileContainer}>
            <Profile style={styles.profileImage} />
            </View>
        </View>
        <View>
            <Text style={styles.title}>Choose the</Text>
            <Text style={styles.subtitle}>Food you love</Text>
        </View>
        <Gap height={32} />
        <View>
            <TextInput
            placeholder="Search for a food item"
            style={styles.input}
            />
        </View>
        <Gap height={47} />
        <View style={styles.container}>
            <Text style={styles.titleText}>Categories</Text>
            <Gap height={6} />
            <View style={styles.lines}></View>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Menu1')} activeOpacity={0.7}>
            <Food style={styles.food}/>
        </TouchableOpacity>
        <Gap height={51} />
        <View>
            <Drink style={styles.drink}/>
        </View>
        </View>
    );
};

export default MainMenu;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingVertical: 35,
    },
    title: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'Poppins-Regular',
        marginHorizontal: 28
    },
    subtitle: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'Poppins-Medium',
        marginHorizontal: 28
    },
    profileContainer: {
        paddingRight: 28,
    },
    profileImage: {
        width: 50,
        height: 50,
    },
    container: {
        marginHorizontal: 28
    },
    lines: {
        alignItems: 'center',
        paddingTop: 10,
        paddingRight: 10,
        borderBottomColor: '#ABABA7',
        borderBottomWidth: 1,
    },
    titleText: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        color: 'black',
        fontWeight: '500',
    },
    input: {
        borderWidth: 0,
        borderColor: 'transparent',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 30,
        marginHorizontal: 28,
        textAlign: 'left',
    },
    drink: {
        width: 110,
        height: 70,
        marginHorizontal: 133
    },
    food: {
        width: 110,
        height: 70,
        marginHorizontal: 133,
        marginTop: 38
    }
});
