import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Buttom, Header, TextInput, Gap } from "../../components";
import { Eye } from "../../assets/icons";

const SignIn = ({navigation}) => {

  return (
    <View>
      <Header/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.pembungkus}>
          <View style={styles.container}>
            <Buttom title="Log In" color="#541690" textColor="#FFFFFF"/>
            <Buttom title="Sign Up" color="#FFFFFF" textColor="#541690" onPress={() => navigation.navigate('SignUp')}/>
          </View>
          <Gap height={40} />
          <TextInput placeholder="Enter email or username"/>
          <View style={styles.passwordInput}>
            <TextInput placeholder="Password" secureTextEntry/>
            <TouchableOpacity style={styles.eyeIcon}>
              <Eye width={20} height={20} color="#ABABA7" />
            </TouchableOpacity>
          </View>
          <Gap height={10} />
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          <Gap height={80} />
          <Buttom title="Log In" color="#541690" textColor="#FFFFFF" onPress={() => navigation.navigate('Home')}/>
        </View>
      </ScrollView>
    </View>
  )
}

export default SignIn;

const styles = StyleSheet.create({
  pembungkus: {
    elevation: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 34,
    margin: 40,
    marginTop: 180,
    paddingVertical: 120,
    paddingHorizontal:20,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop:-80,
  },
  forgotPasswordText: {
    color: "#ABABA7",
    textAlign: 'right',
    fontFamily: 'Poppins-Regular',
  },
  
  eyeIcon: {
    position: 'absolute',
    right: 0,
    padding: 10,
  },
});
