import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import SearchHeader from '../components/SearchHeader';
import SearchListItem from '../components/SearchListItem';
import Spinner from '../components/Spinner';

const SearchScreen = () => {
  const [loading, setLoading] = useState(false);
  const [dataList, setDataList] = useState([]);
  const childProps = {
    dataList,
    setDataList,
    loading,
    setLoading,
  };

  return (
    <View style={{paddingBottom: 80}}>
      <SearchHeader {...childProps} />
      {loading && <Spinner />}
      {!loading && (
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
