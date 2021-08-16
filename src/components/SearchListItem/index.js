import React from 'react';
import {View, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {DAYS} from '../../constants';
import styles from './styles';

const SearchListItem = props => {
  const {
    item: {day, night, date, color, id},
  } = props;
  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <Text style={styles.title}>
        {id === 1 ? 'Today' : DAYS[date.getDay()]}
      </Text>
      <View style={styles.descriptionWrap}>
        <Feather name="sun" color="yellow" size={30} />
        <Text style={styles.text}>{day < 1 ? day : `+ ${day}`} °</Text>
        <Feather name="moon" color="black" size={30} />
        <Text style={styles.text}>{night < 1 ? night : `+ ${night}`} °</Text>
      </View>
    </View>
  );
};

export default SearchListItem;
