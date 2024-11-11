import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import HeaderBar from '../../components/headerBar';

const DetailPage = () => {
    return (
      <View>
        <HeaderBar />
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
            <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
          </MapView>
        </View>
      </View>
    );
}

export default DetailPage;