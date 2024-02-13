import {View, Text, Image} from 'react-native';
import React from 'react';

const Splash = () => {
  return (
    <View style={{height: '100%', alignItems : "center", backgroundColor : "#131414"}}>
      <View style={{flex: 0.95, justifyContent : "center"}}>
        <Image source={require('../../Movie/static/img/logo.png')} style={{ height:300, width:280 }}/>
      </View>
      <View style={{flex: 0.05}}>
        <Text style={{ color:"white" }}>MyCompany</Text>
      </View>
    </View>
  );
};

export default Splash;
