import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Lato-Italic',
    color: 'blue',
  },
});
