import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginTop: 5,
    height: 40,
    marginLeft: 15,
  },
  icon: {
    position: 'absolute',
    elevation: 10,
    top: 20,
    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  rowIcon: {marginRight: 10},
  rowText: {paddingBottom: 5},
});

export default styles;
