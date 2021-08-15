import React from 'react';
import {useRef} from 'react';
import {View, FlatList, StyleSheet, Animated} from 'react-native';
import {useSelector} from 'react-redux';
import ErrorIndicator from '../components/ErrorIndicator';
import SearchHeader from '../components/SearchHeader';
import SearchListItem from '../components/SearchListItem';
import Spinner from '../components/Spinner';
import THEME from '../theme';

const ITEM_SIZE = 110;

const SearchScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const {dataList, loading, error} = useSelector(state => state.search);

  return (
    <View style={styles.container}>
      <SearchHeader />
      {error ? <ErrorIndicator /> : loading && <Spinner />}
      {!loading && !error && (
        <Animated.FlatList
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}
          data={dataList}
          renderItem={({item, index}) => {
            const inputRange = [
              -1,
              0,
              ITEM_SIZE * index,
              ITEM_SIZE * (index + 2),
            ];
            const opacityRange = [
              -1,
              0,
              ITEM_SIZE * index,
              ITEM_SIZE * (index + 2),
            ];
            const scale = scrollY.interpolate({
              inputRange,
              outputRange: [1, 1, 1, 0],
            });
            const opacity = scrollY.interpolate({
              inputRange: opacityRange,
              outputRange: [1, 1, 1, 0],
            });
            return (
              <SearchListItem item={item} scale={scale} opacity={opacity} />
            );
          }}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.BG_COLOR,
    flex: 1,
  },
});
