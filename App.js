import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet, Image, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';

function Home({ navigation }) {

  const [loaded] = useFonts({
    CaviarDreams: require('./src/assets/fonts/CaviarDreams.ttf'),
    CaviarDreams_Bold: require('./src/assets/fonts/CaviarDreams_Bold.ttf'), 
  });

  return (

    <View style={estilos.container}>

        <View style={estilos.logoredonda}>
          <Image source={require('./assets/logo_redonda.png')} style={estilos.logo}></Image>
        </View>

        <View>
          <Text style={estilos.textoSP}>Simples e prático: tudo o que você precisa!</Text>
        </View>

        <View style={estilos.porfora}>
            <View>

                <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Login')}>
                    <Text style={estilos.textoLogin}> faça seu login </Text>
                </TouchableOpacity>

            </View>
        </View>
          
    </View>
  );
}

function Login({ navigation }) {

  const [loaded] = useFonts({
    CaviarDreams: require('./src/assets/fonts/CaviarDreams.ttf'),
    CaviarDreams_Bold: require('./src/assets/fonts/CaviarDreams_Bold.ttf'), 
  });

  return (
      <View style={estilos.container}>

          <View style={estilos.logoredonda2}>
            <Image source={require('./assets/logo_redonda.png')} style={estilos.logo2}></Image>
          </View>

              <View style={estilos.campoCPF}>
                  <Text style={estilos.textos} >digite seu cpf</Text>
                <TextInput style={estilos.textInputCPF} placeholderTextColor="#000000"> </TextInput>
              </View>

              <View style={estilos.campoSenha}>
                  <Text style={estilos.textos} >digite sua senha</Text>
                <TextInput style={estilos.textInputSENHA} placeholderTextColor="#000000"> </TextInput>
              </View>

          <View style={estilos.porfora2}>
                <TouchableOpacity style={estilos.botao2} onPress={() => navigation.navigate('Tela')}>
                    <Text style={estilos.textoLogin2}> login </Text>
                </TouchableOpacity>
          </View>

      </View>
  );
}

function Tela({ navigation }) {

  return (

    <View>




      
      <View style={estilos.porfora2}>
                <TouchableOpacity style={estilos.botao2} onPress={() => navigation.navigate('Tela')}>
                    <Text style={estilos.textoLogin2}> login </Text>
                </TouchableOpacity>
          </View>
    </View>

  );
};

const Stack = createNativeStackNavigator();

function App() {

    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">

                <Stack.Screen name="Bem Vindo" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Tela1" component={Tela} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

const estilos = StyleSheet.create ({

  //home
  container:{
    backgroundColor: '#FFFFFF',
    flex: 1,
    
  },

  logoredonda: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 55

  },

  logo: {
      width: 180,
      height: 180,
  },

  botao: {
      backgroundColor: '#02abff',
      width: 190,
      height: 50,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5, 
      shadowColor:'#52006A'
      
  },

  porfora: {
    alignItems: 'center',
    paddingTop: 90
  },

  textoLogin: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'CaviarDreams',
    
  },

  textoSP:{
    fontSize: 15,
    fontFamily: 'CaviarDreams',
    textAlign: 'center',
    paddingTop: 10
  },

  //login
  textInputCPF: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    width: 240,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#02abff",
    borderWidth: 1.5,
    borderRadius: 30,
    fontFamily: 'CaviarDreams',
    paddingLeft: 5

  },
  textInputSENHA: {
    backgroundColor: "#FFFFFF",
    color: "#FFFFFF",
    width: 240,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#02abff",
    borderWidth: 1.5,
    borderRadius: 30,
    fontFamily: 'CaviarDreams',
    paddingLeft: 5
  },

  campoCPF: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    
  },

  campoSenha: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 25
  },

  textos: {
    fontSize: 17,
    fontFamily: 'CaviarDreams',
    padding: 2
     
  },
  
  logoredonda2: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15
  },

  logo2: {
    width: 180,
    height: 180,
  },

  botao2: {
    backgroundColor: '#02abff',
    width: 190,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, 
    shadowColor:'#52006A'
  },

  textoLogin2: {
    fontSize: 17,
    color: 'white',
    fontFamily: 'CaviarDreams',
    
  },

  porfora2: {
    alignItems: 'center',
    paddingTop: 25
  },
});

export default App;

