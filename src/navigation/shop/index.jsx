import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COLORS } from '../../constants';
import { Categories, Planta, Plantas } from '../../screens';
const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.secondary,
        },
        headerTintColor: COLORS.dark,
        headerTitleStyle: {
          fontFamily: 'Lato-Bold',
        },
      }}>
      <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
      <Stack.Screen
        name="Plantas"
        component={Plantas}
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: route.params.color,
          },
        })}
      />
      <Stack.Screen
        name="Planta"
        component={Planta}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
