import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style';

const ListEmpty = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Nothing to show</Text>
    </View>
  )
}

export default ListEmpty;