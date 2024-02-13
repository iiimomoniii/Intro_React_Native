import {View, Text, Image, Pressable, Alert} from 'react-native';
import React from 'react';

const Splash = ({ navigation }) => {
  //Pressable use for redirect Splash page to Home page

  const onPress = () => {
    navigation.navigate('Home')
  }

  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          height: '100%',
          alignItems: 'center',
          backgroundColor: '#131414',
        }}>
        <View style={{flex: 0.95, justifyContent: 'center'}}>
          <Image
            source={require('../../Movie/static/img/logo.png')}
            style={{height: 300, width: 280}}
          />
        </View>
        <View style={{flex: 0.05}}>
          <Text style={{color: 'white'}}>MyCompany</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Splash;
