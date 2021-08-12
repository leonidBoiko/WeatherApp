import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {weatherUrl, GOOGLE_PLACES_API_KEY} from '../constants';

const MapScreen = () => {
  const [coords, setCoords] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(
        weatherUrl({lat: coords.latitude, lng: coords.longitude}),
      );
      const data = await res.json();
      console.log(data.timezone);
    } catch (error) {
      console.log(error);
    }
  }, [coords]);

  useEffect(() => {
    fetchData();
  }, [coords, fetchData]);

  const getLocation = async () => {
    try {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=40.70556210999075,-73.99609632790089&key=${GOOGLE_PLACES_API_KEY}`,
      );
      const data = await res.json();
      const resString = data.plus_code.compound_code.split(' ');
      const filterStr = resString.slice(1, resString.length).join(' ');
      console.log(filterStr);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        onLongPress={e => {
          setCoords({
            ...e.nativeEvent.coordinate,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }}
        style={styles.map}
        provider={PROVIDER_GOOGLE}>
        {coords && (
          <Marker
            onPress={() => getLocation()}
            coordinate={coords}
            title={`${coords.latitude}`}
            description={`${coords.longitude}`}
          />
        )}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
