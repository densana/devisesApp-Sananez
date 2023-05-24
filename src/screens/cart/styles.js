import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    backgroundColor: COLORS.light,
  },
  footer: {
    backgroundColor: COLORS.secondary,
    borderTopWidth: 1,
    borderTopColor: COLORS.primary,
    paddingVertical: 10,
  },
  buttonConfirm: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  buttonDisabledConfirm: {
    backgroundColor: COLORS.secondary,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  textButtonConfirm: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
  },
  totalContainer: {
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalText: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
  },
  textPrice: {
    fontSize: 16,
    fontFamily: 'Lato-Bold',
  },
});
