import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import MoviesObjLists from '../mock/movies.json';
const Detail = ({navigation, route}) => {
  let movie = MoviesObjLists.movies.find(m => m.id === route.params.id);
  console.log(movie);
  return (
    <View>
      <Image
        style={styles.coverImage}
        source={{
          uri: movie.poster_url,
        }}
      />
      <View style={styles.textBox}>
        <Text style={{ fontSize:25 }}>{movie.title_th}</Text>
        <Text style={{ paddingTop:10 , fontSize:20}}>{movie.synopsis_th}</Text>
      </View>
    </View>
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

export default Detail;
