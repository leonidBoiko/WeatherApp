import React from 'react';
import {View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Feather from 'react-native-vector-icons/Feather';
import {weatherUrl} from '../../constants';
import Row from './Row';
import styles from './styles';

const GOOGLE_PLACES_API_KEY = 'AIzaSyBl2tUhCgALkUYgfeTcIKtakqy_vSPy8P4';

const SearchHeader = ({dataList, setDataList, loading, setLoading}) => {
  const handleOnPress = async coords => {
    setLoading(true);
    try {
      const res = await fetch(weatherUrl(coords));
      const data = await res.json();
      const filteredData = data.daily.slice(0, -1).map((item, idx) => {
        return {
          id: idx + 1,
          date: new Date(item.dt * 1000),
          day: item.temp.day,
          night: item.temp.night,
          color: `#${idx}A69C0`,
        };
      });
      setDataList(filteredData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Feather name="search" size={20} style={styles.icon} />
      <GooglePlacesAutocomplete
        autoFocus={false}
        fetchDetails
        placeholder="Search..."
        onPress={(data, details = null) => {
          handleOnPress(details.geometry.location);
          // console.log('data', data.structured_formatting.main_text);
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

export default SearchHeader;
