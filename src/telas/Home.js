import React from 'react';
import { View, Button} from 'react-native';

//import icon from '../../assets/icon.png';

export default function Home( navigation ) {

    return ( //<TouchableOpacity>
        <View >
            <Button title='Bem Vindo' 
            onPress={() => navigation.navigate('Login')} />
        </View>
        //</TouchableOpacity>
    )
    /*return  (
        <View style={estilos.container}>
            <Image source={icon} style={estilos.icon}/>
        </View>
    )*/
};

/*export function BemVindo(props) {

    console.log(props);
    
    return <TouchableOpacity>
        <View style={estilos.fora}>
            <Button title='Bem-Vindo' style={estilos.texto} onPress={() => props.navigation.navigate('Home2')}>Bem Vindo</Button>
            <Text style={estilos.texto}> Bem Vindo </Text>
        </View>
        </TouchableOpacity>
};*/
/*
const estilos = StyleSheet.create({
    icon: {
        height: 315,
        width: 315,
},
    container: {
        flexDirection: 'column',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
},
    fora: {
        backgroundColor: "#ffa500",
        width: 130,
        height: 50,
        borderRadius: 20,
        left: "33%"
},
    texto:{
        color: "#FFF",
        fontSize: 17,
        textAlign: 'center',
        marginTop: 15
    }
});
*/