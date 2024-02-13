import {View, Text, Image} from 'react-native';
import React from 'react';

const images = {
    1 : require('../static/img/1.jpg'),
    2 : require('../static/img/2.jpg'),
    3 : require('../static/img/3.jpg')
}

const Detail = ({navigation, route}) => {
  return (
    <View>
      <Image
        source={images[route.params.id]}
        style={{height: 333, width: '100%'}}
      />
      <Text style={{ fontSize:20, marginTop:10 , padding :10}}>{route.params.name}</Text>
    </View>
  );
};

export default Detail;
