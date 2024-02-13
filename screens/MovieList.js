import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import React, { useState, useEffect } from 'react';
//useState for collection data from api
//useEffect for call api before show data
//mport MoviesObjLists from '../mock/movies.json';
const MovieList = ({navigation}) => {

  const [MoviesObjLists, setMovies] = useState([])

  useEffect(()=>{
    fetch('https://www.majorcineplex.com/apis/get_movie_avaiable')
    .then(res => res.json())
    .then((result)=> {
      setMovies(result.movies)
    })
  },[])

  const pressDetail = (id) => {
    navigation.navigate('Detail', {id: id});
  };
  return (
    <ScrollView style={{padding: 10}}>
      {MoviesObjLists.map(m => (
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
