import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'gray',
    paddingVertical: 12
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
  },
  text: {
    fontSize: 24
  },
  icon: {
    marginHorizontal: 6,
    fontSize: 28
  }
});
