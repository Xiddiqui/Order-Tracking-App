import { View, Text, TextInput, ViewProps } from 'react-native'
import React from 'react'
import { styles } from './style';

interface SearchInputProps extends ViewProps {
    onChangeText: any;
  [key: string]: any;
}

const SearchInput: React.FC<SearchInputProps>  = ({ onChangeText}) => {
  return (
    <View>
      <TextInput
        placeholder="Enter Order Id"
        style={styles.input}
        keyboardType="default"
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchInput;