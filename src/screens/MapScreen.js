import React, {useState, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {currentWeatherUrl, GOOGLE_PLACES_API_KEY} from '../constants';

const MapScreen = () => {
  // const [coords, setCoords] = useState(null);
  const {coords} = useSelector(state => state.map);
  const [location, setLocation] = useState(null);
  const [temp, setTemp] = useState(null);
  let markerRef = useRef(null);

  const fetchCurrentTemp = async ({latitude, longitude}) => {
    try {
      const res = await fetch(
        currentWeatherUrl({lat: latitude, lng: longitude}),
      );
      const data = await res.json();
      setTemp(data.current.temp);
    } catch (error) {
      console.log(error);
    }
  };

  const getLocation = async ({latitude, longitude}) => {
    try {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_PLACES_API_KEY}`,
      );
      const data = await res.json();
      const resString = data.plus_code.compound_code.split(' ');
      const filterStr = resString.slice(1, resString.length).join(' ');
      setLocation(filterStr);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        onLongPress={e => {
          markerRef.current && markerRef.current.hideCallout();
          // setCoords({
          //   ...e.nativeEvent.coordinate,
          //   latitudeDelta: 0.0922,
          //   longitudeDelta: 0.0421,
          // });
          getLocation({...e.nativeEvent.coordinate});
          fetchCurrentTemp({...e.nativeEvent.coordinate});
        }}
        initialRegion={{
          latitude: 50.49558653006826,
          longitude: 30.554091297090057,
          latitudeDelta: 12.8,
          longitudeDelta: 15.06,
        }}
        style={styles.map}
        provider={PROVIDER_GOOGLE}>
        {coords && (
          <Marker
            ref={markerRef}
            coordinate={coords}
            title={`${location}`}
            description={`${temp}`}
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
