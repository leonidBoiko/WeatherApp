import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import THEME from '../../theme';
import styles from './style';

const Row = ({item}) => {
  return (
    <View style={styles.row}>
      <FontAwesome5
        name="temperature-low"
        size={15}
        color={THEME.MAIN_COLOR}
        style={styles.rowIcon}
      />
      <Text style={styles.rowText}>{item.description}</Text>
    </View>
  );
};

export default Row;
