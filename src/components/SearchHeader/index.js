import React from 'react';
import {View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Feather from 'react-native-vector-icons/Feather';
import Row from './Row';
import styles from './styles';
import {GOOGLE_PLACES_API_KEY} from '../../constants';
import {fetchWeatherData} from '../../store/actions/search';
import {useDispatch} from 'react-redux';

const SearchHeader = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Feather name="search" size={20} style={styles.icon} />
      <GooglePlacesAutocomplete
        autoFocus={false}
        fetchDetails
        placeholder="Type city name..."
        onPress={(_, details = null) => {
          dispatch(fetchWeatherData(details.geometry.location));
        }}
        styles={{
          textInput: styles.input,
        }}
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: 'en',
          type: '(cities)',
        }}
        renderRow={item => <Row item={item} />}
      />
    </View>
  );
};

export default SearchHeader;
