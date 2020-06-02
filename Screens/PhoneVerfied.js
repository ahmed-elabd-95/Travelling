import React from 'react';
import {View, Text, Image, StyleSheet, TextInput,} from 'react-native';

export class PhoneVerfied extends React.Component {
  render(){
    const { viewUser, phoneText} = styles;
    return (
        <View style={viewUser}>
          <Image
      source={require('../images/logo.png')}
      style={{width: 150, height: 150, resizeMode: 'contain',marginTop: 100}}
          />
      <Text style={phoneText}>Enter mobile number</Text>
      
        </View>
    );
  }
  
};
const styles = StyleSheet.create({
  viewUser: {
    alignItems: 'center',
  },
  phoneText: {
    color: '#6757A7',
    fontSize: 20,
    fontWeight: 'normal',
    marginTop: 50
  }
})

