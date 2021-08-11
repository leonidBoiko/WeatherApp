import React from 'react';
import {Text, View, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from './style';

const HeaderSearchComponent = () => {
  return (
    <View style={styles.container}>
      <Feather name="search" size={20} />
      <TextInput style={styles.input} placeholder="Search..." />
    </View>
  );
};

export default HeaderSearchComponent;
