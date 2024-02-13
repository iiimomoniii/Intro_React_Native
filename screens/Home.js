import {View, Text, ScrollView, Image, Pressable} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  const onPressItem = (id, name) => {
    navigation.navigate('Detail', {id: id, name: name});
  };
  return (
    <ScrollView style={{padding: 10}}>
      <View>
        <Text style={{fontSize: 30}}>Attractions</Text>
      </View>
      <View style={{marginVertical: 10}}>
        <Pressable onPress={() => onPressItem(1, 'Phi Phi Islands')}>
          <Image
            source={require('../static/img/1.jpg')}
            style={{height: 333, width: '100%'}}
          />
          <Text style={{fontSize: 20, marginTop: 10}}>Phi Phi Islands</Text>
          <Text style={{ padding:10 }}>
            Phi Phi Islands are a group of islands in Thailand between the large
            island of Phuket and the Malacca Coastal Strait of Thailand.
          </Text>
        </Pressable>
      </View>
      <View style={{marginVertical: 10}}>
        <Pressable onPress={() => onPressItem(2, 'Eiffel Tower')}>
          <Image
            source={require('../static/img/2.jpg')}
            style={{height: 333, width: '100%'}}
          />
          <Text style={{fontSize: 20, marginTop: 10}}>Eiffel Tower</Text>
          <Text style={{ padding:10 }}>
            Eiffel Tower is one of the most famous structures in the world.
            Eiffel Tower is named after a leading French architect and engineer.
            It was built as a symbol of the World Fair in 1889.
          </Text>
        </Pressable>
      </View>
      <View style={{marginVertical: 10}}>
        <Pressable onPress={() => onPressItem(3, 'Times Square')}>
          <Image
            source={require('../static/img/3.jpg')}
            style={{height: 333, width: '100%'}}
          />
          <Text style={{fontSize: 20, marginTop: 10}}>Times Square</Text>
          <Text style={{ padding:10 }}>
            Times Square has become a global landmark and has become a symbol of
            New York City. This is a result of Times Square being a modern,
            futuristic venue, with huge advertising screens dotting its
            surroundings.
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Home;
