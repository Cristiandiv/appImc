import { Text, SafeAreaView, StyleSheet, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import React, {useState} from 'react'





export default function App() {

  function CalculoImc(){
  const resultado = peso / (altura*altura);
  alert('O seu indice de massa corporal é ' + resultado);
  }

  const [peso,setPeso] = useState('');
  const [altura,setAltura] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
       Cálculo do Indice de Massa Corporal
      </Text>
      <TextInput
      style={styles.input}
      placeholder="Digite seu peso atual" 
      placeholderTextColor='#708090'
      keyboardType="numeric"
      onChangeText={(peso)=>setPeso(peso)}
      />

      <TextInput
      style={styles.input}
      placeholder="Digite a sua altura" 
      placeholderTextColor='#708090'
      keyboardType="numeric"
      onChangeText={(altura)=>setAltura(altura)}
      />
      
      <View style={styles.cximagem}>
      <Image style={styles.img} resizeMode="center" source={require("./assets/tabela-imc.png")} />
      </View>

      <TouchableOpacity style={styles.btn} onPress={CalculoImc}>
        <Text style={styles.textbtn}>Calcular</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom:10,
  },

  btn:{
    alignItems:'center',
    backgroundColor:'#000000',
    padding: 15,
    borderRadius: 10,
  },

  textbtn:{
    fontSize:30,
    color:'#fff',
  },

  input:{
    fontSize: 16,
    padding: 20,
    backgroundColor:'#FFFFE0',
    borderRadius:10,
    margin: 15,
  },
  cximagem:{
    flex: 1,
    alignItems: 'center',
  },

  img:{
    marginTop: 1,
    width: 800,
    height: 260,
  }
});
