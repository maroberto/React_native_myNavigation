import React from 'react';
import { View, Text } from 'react-native';

export default function Contacts({navigation}){
  return(
    <View style={{marginTop: 30}}>
      <View>
        <Text>Nome: Marcos Roberto</Text>
        <Text>Telefone: (11) 95134-0113</Text>
        <Text
        onPress={()=> navigation.navigate('Informações', 
        {
          nome: 'Marcos Roberto',
          telefone: '(11) 95134-0113',
          endereco: 'Rua Antonio de Camargo Ortiz',
          numero: '395',
          profissao: 'Surfisor',
          email: 'surfisor@surfisor.com.br',
        }
        )}
        >Infomação...</Text>
      </View>
      <View style={{marginTop: 20}}>
        <Text>Nome: Meire Ivone</Text>
        <Text>Telefone: (11) 92222-2222</Text>
        <Text
        onPress={()=> navigation.navigate('Informações',
        {
          nome: 'Meire Ivone',
          telefone: '(11) 95134-0113',
          endereco: 'Rua Jose Galvez',
          numero: '41',
          profissao: 'Surfisor',
          email: 'Meivone@gmail.com', 
        }
        )}
        >Infomação...</Text>
      </View>
    </View>
  )
}