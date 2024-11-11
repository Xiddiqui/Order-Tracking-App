import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style';
import OrderCard from '../../components/orderCard';
import SearchInput from '../../components/searchInput';
import AppHeader from '../../components/header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlatList } from 'react-native';
import { Order, OrdersArray } from "../../utils/dataSource";



const HomePage = (props: any) => {
    const [searchText, setSearchText] = useState<string>("");
    const [filteredOrders, setFilteredOrders] = useState<Order[]>(OrdersArray);
    const [searchHistory, setSearchHistory] = useState<string[]>([]);

    const handleSearch = (text: string) => {
        setSearchText(text);
        if (text) {
          setFilteredOrders(
            OrdersArray.filter((order) =>
              order.trackingId.toLowerCase().includes(text.toLowerCase())
            )
          );
          if (!searchHistory.includes(text)) {
            setSearchHistory((prevHistory) => [text, ...prevHistory]);
          }
        } else {
          setFilteredOrders(OrdersArray);
        }
      };
  return (
    <View style={styles.container}>
      <AppHeader>
        <SearchInput onChangeText={handleSearch}value={searchText}/>
      </AppHeader>
      <FlatList
        data={filteredOrders}
        renderItem={({ item }) => (
          <OrderCard
            onPress={() =>
              props.navigation.navigate("DetailPage", { data: item })
            }
            orderId={item.trackingId}
            status={item.Status}
          />
        )}
      />
    </View>
  );
};

export default HomePage;