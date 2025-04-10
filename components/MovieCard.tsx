import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const MovieCard = ({id,poster_path,title,vote_average,release_date}:Movie) => {
  return (
    <View>
      <Link href={`/movie/${id}`} asChild />
    </View>
  )
}

export default MovieCard;