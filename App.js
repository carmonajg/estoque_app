import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/telas/Home';
import Login from './src/telas/Login';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
        <NavigationContainer>
          <Stack.Navigator>
            
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Tela de Login" component={Login} />

          </Stack.Navigator>
        </NavigationContainer>
  );
};








/*export default function App() {
  return (
    <SafeAreaView>
        <StatusBar />
            <Home />
            <BemVindo />
    </SafeAreaView>
  );
}*/

