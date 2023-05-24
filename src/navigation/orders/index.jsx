import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COLORS } from '../../constants';
import { Orders } from '../../screens';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.secondary,
        },
        headerTintColor: COLORS.dark,
        headerTitleStyle: {
          fontFamily: 'Lato-Bold',
        },
      }}>
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
