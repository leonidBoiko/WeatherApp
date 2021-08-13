import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {StyleSheet, Text, View} from 'react-native';
import THEME from '../../theme';

const ErrorIndicator = ({iconSize = 50, textStyle = null}) => {
  return (
    <View style={styles.wrap}>
      <Entypo name="thunder-cloud" size={iconSize} color={THEME.MAIN_COLOR} />
      <Text style={[styles.text, textStyle]}>
        Soothing went wrong, please try again later
      </Text>
    </View>
  );
};

export default ErrorIndicator;

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
});
