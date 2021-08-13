import React, {useState, useRef} from 'react';
import {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';
import {fetchLocation, fetchCurrentTemp} from '../store/actions/mapScreen';

const MapScreen = () => {
  const [coords, setCoords] = useState(null);
  const dispatch = useDispatch();
  const {location} = useSelector(state => state.location);
  const {temp} = useSelector(state => state.temp);
  let markerRef = useRef(null);

  useEffect(() => {
    markerRef.current && markerRef.current.showCallout();
  }, [location]);

  useEffect(() => {
    markerRef.current && markerRef.current.hideCallout();
  }, [coords]);

  return (
    <View style={styles.container}>
      <MapView
        onLongPress={e => {
          setCoords({
            ...e.nativeEvent.coordinate,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
          dispatch(fetchLocation({...e.nativeEvent.coordinate}));
          dispatch(fetchCurrentTemp({...e.nativeEvent.coordinate}));
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
            description={`${temp} °C`}
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
