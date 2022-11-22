import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonNew } from './src/component/Button';


function App() { 

  return (
    <SafeAreaView style = {{backgroundColor: '#ccc', flex: 1}}>
      <ButtonNew onPress = {() => alert('Boton')}Text = " Clikeame"/>
      <ButtonNew onPress = {() => alert('Boton dos')}Text = " Tocame"/>
      <ButtonNew2 onPress = {() => alert('Boton negro')}Text = "opcion "/>
      <CancelButton onPress = {() => alert('cancel')}Text = "cancelar "/>
    </SafeAreaView>
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

export default App;