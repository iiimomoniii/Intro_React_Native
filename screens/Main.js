import {View, Text, Image, Pressable, Alert} from 'react-native';
import React from 'react';

const Splash = ({ navigation }) => {
  //Pressable use for redirect Splash page to Home page

  const onPress = () => {
    navigation.navigate('MovieList')
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
            source={require('../../Movie/static/img/major_logo.jpeg')}
            style={{ width: 400}}
          />
        </View>
        <View style={{flex: 0.05}}>
          <Text style={{color: 'white'}}>@ Major Cineplex</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Splash;
