import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from './style';

const SearchInput = () => {
  return (
    <View>
          <TextInput placeholder='Enter Order Id' style={styles.input} keyboardType='decimal-pad'/>
    </View>
  )
}

export default SearchInput;