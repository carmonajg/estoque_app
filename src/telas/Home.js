import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Text} from 'react-native';

import icon from '../../assets/icon.png';

export default function Home() {
    return  <View style={estilos.container}>
        <Image source={icon} style={estilos.icon}/>
            </View>
};

export function BemVindo() {
    
    return <TouchableOpacity>
        <View style={estilos.fora}>
            <Text style={estilos.texto}> Bem-Vindo </Text>
        </View>
        </TouchableOpacity>
};

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
