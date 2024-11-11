import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style';
import OrderCard from '../../components/orderCard';
import SearchInput from '../../components/searchInput';
import AppHeader from '../../components/header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';



const HomePage = (props : any) => {
  return (
    <View style={styles.container}>
      <AppHeader>
        <SearchInput />
      </AppHeader>
      <OrderCard onPress={() => props.navigation.navigate("DetailPage")} />
    </View>
  );
};

export default HomePage;