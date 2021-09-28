import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Home, { BemVindo }  from './src/telas/Home';

export default function App() {
  return (
    <SafeAreaView>
        <StatusBar />
            <Home />
            <BemVindo />
    </SafeAreaView>
  );
}

