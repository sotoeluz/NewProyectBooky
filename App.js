import { StatusBar } from 'expo-status-bar';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonNew } from './src/component/Button';


function App() { 

  return (
    <SafeAreaView style = {{backgroundColor: '#ccc', flex: 1}}>
      <ButtonNew onPress = {() => alert('Boton')}Text = " Ciclo Basico"/>
      <ButtonNew onPress = {() => alert('Boton dos')}Text = "Ciclo Superior"/>
      <ButtonNew2 onPress = {() => alert('Boton tres')}Text = "Talleres"/>
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

export const App = () => {
  const [color, setColor] = useColor("hex", "#121212");

  return <ColorPicker width={456} height={228} color={color} onChange={setColor} hideHSV dark />;
};

export default App;