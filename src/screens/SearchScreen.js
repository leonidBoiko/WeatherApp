import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';
import ErrorIndicator from '../components/ErrorIndicator';
import SearchHeader from '../components/SearchHeader';
import SearchListItem from '../components/SearchListItem';
import Spinner from '../components/Spinner';

const SearchScreen = () => {
  const {dataList, loading, error} = useSelector(state => state.search);

  return (
    <View style={{paddingBottom: 80}}>
      <SearchHeader />
      {error ? <ErrorIndicator /> : loading && <Spinner />}
      {!loading && !error && (
        <FlatList
          data={dataList}
          renderItem={({item}) => <SearchListItem item={item} />}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default SearchScreen;
