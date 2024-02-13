import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import React from 'react';
import MoviesObjLists from '../mock/movies.json';
const MovieList = ({navigation}) => {
  const pressDetail = (id) => {
    navigation.navigate('Detail', {id: id});
  };
  return (
    <ScrollView style={{padding: 10}}>
      {MoviesObjLists.movies.map(m => (
        <View style={{marginBottom: 10}} key={m.id}>
          <Pressable onPress={()=> pressDetail(m.id)}>
            <Image
              style={styles.coverImage}
              source={{
                uri: m.poster_url,
              }}
            />
            <View style={styles.textBox}>
              <Text style={{fontSize: 20}}>
                {m.title_en}({m.genre})
              </Text>
              <Text style={{fontSize: 15}}>{m.title_th}</Text>
              <Text></Text>
            </View>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  coverImage: {
    width: '100%',
    height: 300,
  },
  textBox: {
    margin: 5,
  },
});

export default MovieList;
