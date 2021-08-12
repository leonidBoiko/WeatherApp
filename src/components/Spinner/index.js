import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import THEME from '../../theme';

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={THEME.MAIN_COLOR} size="large" />
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
