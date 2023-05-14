import React from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import { Buttom, Header, TextInput, Gap } from "../../components";

const SignIn = ({navigation}) => {
  return (
    <View>
      <Header/>
      <ScrollView>
        <View>
          <TextInput/>
          <TextInput/>
          <Buttom/>
        </View>
      </ScrollView>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({})