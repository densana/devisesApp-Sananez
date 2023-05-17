import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    height: 120,
  },
  contentContainer: {
    flex: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  item: {
    flex: 1,
    justifyContent: 'space-around',
  },
  name: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
  },
  weight: {
    fontFamily: 'Lato-Italic',
    fontSize: 14,
  },
});
