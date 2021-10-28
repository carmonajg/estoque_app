import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button, StyleSheet, Image} from 'react-native';

function Home({ navigation }) {
  return (

    <View>

        <View style={estilos.logoredonda}>
          <Image source={require('./assets/logo_rendonda.png')} style={estilos.logo}></Image>
        </View>

        <View style={estilos.botaoCPF}>

        </View>

        <View style={estilos.porfora}>
            <View style={estilos.botaofora}>
              <Button title="Login" style={estilos.botao}
              onPress={() => navigation.navigate('Login')} />
            </View>
        </View>
          
    </View>
  );
}

function Login({ navigation }) {
  return (

      <View>
          <Text>Componente Login</Text>
          <Button title="Teste" onPress = { () => navigation.navigate ('Login')} />
      </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {

    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Bem Vindo" component={Home} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const estilos = StyleSheet.create ({

  logoredonda: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 35

  },

  logo: {
      width: 180,
      height: 180,
  },

  botaofora: {
      backgroundColor: '#57a4ff',
      width: 190,
      height: 35,
      borderRadius: 50,
      justifyContent: 'center'
  },

  botao: {
      color: "#FFFFFF",
      backgroundColor: '#57a4ff',
      width: 190,
      height: 50,
  },
  porfora: {
    alignItems: 'center'
  }
});

export default App;

