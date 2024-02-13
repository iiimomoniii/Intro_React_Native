import {View, Text, Image, StyleSheet} from 'react-native';
import React, { useState, useEffect } from 'react';
//import MoviesObjLists from '../mock/movies.json';
const Detail = ({navigation, route}) => {

  const [movie, setMovies] = useState([])

  useEffect(()=>{
    fetch('https://www.majorcineplex.com/apis/get_movie_avaiable')
    .then(res => res.json())
    .then((result)=> {
      const movie = result.movies.filter(m => m.id === route.params.id);
      setMovies(movie[0])
    })
  },[])
  return (
    <View>
      <Image
        style={styles.coverImage}
        source={{
          uri: movie.poster_url
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
