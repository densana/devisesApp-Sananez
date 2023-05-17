import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundLight,
  },
  name: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    color: COLORS.dark,
    paddingVertical: 20,
  },
  description: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: COLORS.medium,
    paddingVertical: 10,
  },
  cuidados: {
    fontFamily: 'Lato-Thin',
    fontSize: 16,
    color: COLORS.primary,
    paddingVertical: 20,
  },
  beneficios: {
    fontFamily: 'Lato-Italic',
    fontSize: 20,
    color: COLORS.secondary,
  },
  image: {
    width: '100%',
    height: 260,
  },
});
