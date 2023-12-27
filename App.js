import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet} from 'react-native';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { CartScreen, ProductDetailsScreen } from './screens';

export default function App() {
  const Stack= createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='tab' component={BottomTabNavigation} options={{ headerShown : false}}/>
        <Stack.Screen name='Cart' component={CartScreen} options={{ headerShown : false}}/>
        <Stack.Screen name='ProductDetails' component={ProductDetailsScreen} options={{ headerShown : false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
