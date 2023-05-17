import { useFonts } from 'expo-font';
//import { ActivityIndicator, View } from 'react-native/types';

import AppNavigator from './navigation';

export default function App() {
  const [loaded] = useFonts({
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-Italic': require('../assets/fonts/Lato-Italic.ttf'),
    'Lato-Black': require('../assets/fonts/Lato-Black.ttf'),
    'Lato-Light': require('../assets/fonts/Lato-Light.ttf'),
  });

  if (!loaded) {
  }

  return <AppNavigator />;
}
