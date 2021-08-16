import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import ErrorIndicator from '../components/ErrorIndicator';
import SearchHeader from '../components/SearchHeader';
import SearchListItem from '../components/SearchListItem';
import Spinner from '../components/Spinner';
import THEME from '../theme';

const SearchScreen = () => {
  const {dataList, loading, error} = useSelector(state => state.search);

  return (
    <View style={styles.container}>
      <SearchHeader />
      {error ? <ErrorIndicator /> : loading && <Spinner />}
      {!loading && !error && (
        <FlatList
          data={dataList}
          renderItem={({item}) => {
            return <SearchListItem item={item} />;
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
