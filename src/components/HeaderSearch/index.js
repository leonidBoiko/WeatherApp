import React from 'react';
import {View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Feather from 'react-native-vector-icons/Feather';
import Row from './Row';
import styles from './style';

const GOOGLE_PLACES_API_KEY = 'AIzaSyBl2tUhCgALkUYgfeTcIKtakqy_vSPy8P4';

const HeaderSearchComponent = () => {
  return (
    <View style={styles.container}>
      <Feather name="search" size={20} style={styles.icon} />
      <GooglePlacesAutocomplete
        autoFocus={false}
        fetchDetails
        placeholder="Search..."
        onPress={(data, details = null) => {
          console.log('details: ', details);
          console.log('data', data.structured_formatting.main_text);
        }}
        styles={{
          textInput: styles.input,
          poweredContainer: {
            height: 0,
            padding: 0,
          },
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

export default HeaderSearchComponent;
