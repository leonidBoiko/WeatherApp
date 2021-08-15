import React from 'react';
import {View, Text, Animated} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {DAYS} from '../../constants';
import styles from './styles';

const SearchListItem = props => {
  const {
    opacity,
    scale,
    item: {day, night, date, color, id},
  } = props;
  return (
    <Animated.View
      style={[
        styles.container,
        {backgroundColor: color, transform: [{scale}], opacity},
      ]}>
      <Text style={styles.title}>
        {id === 1 ? 'Today' : DAYS[date.getDay()]}
      </Text>
      <View style={styles.descriptionWrap}>
        <Feather name="sun" color="yellow" size={30} />
        <Text style={styles.text}>{day} °</Text>
        <Feather name="moon" color="black" size={30} />
        <Text style={styles.text}>{night} °</Text>
      </View>
    </Animated.View>
  );
};

export default SearchListItem;
