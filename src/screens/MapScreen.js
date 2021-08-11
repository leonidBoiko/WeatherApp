import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const MapScreen = () => {
  const [coords, setCoords] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&exclude=current,hourly,minutely,alerts&units=metric&appid=c04a4d83b9541e92adc8c0f91c9b5f43`,
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
            coordinate={coords}
            title={'marker.title'}
            description={'sad'}
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
