import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Home from './src/Home';

export default function App() {

    return (

      <SafeAreaView>

        <Home />
        <StatusBar style="auto" />

      </SafeAreaView>


    );
};