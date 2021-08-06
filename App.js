import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppContacts from './src/pages/AppContacts';
import Contacts from './src/pages/Contacts'
import Information from './src/pages/Information'

function Tabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={AppContacts} />
      <Tab.Screen name="Contatos" component={Contacts} />
    </Tab.Navigator>
  )
}

//const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="AppContatos" component={Tabs}/>
        <Drawer.Screen name="Agenda" component={Contacts}/>
        <Drawer.Screen name="Informações" component={Information}/>
      </Drawer.Navigator>
    </NavigationContainer>


  )
}

//import * as React from 'react';
//import { Button, View } from 'react-native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
//import { NavigationContainer } from '@react-navigation/native';
//
//function HomeScreen({ navigation }) {
//  return (
//    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//      <Button
//        onPress={() => navigation.navigate('Notifications')}
//        title="Go to notifications"
//      />
//    </View>
//  );
//}
//
//function NotificationsScreen({ navigation }) {
//  return (
//    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//      <Button onPress={() => navigation.goBack()} title="Go back home" />
//    </View>
//  );
//}
//
//const Drawer = createDrawerNavigator();
//
//export default function App() {
//  return (
//    <NavigationContainer>
//      <Drawer.Navigator initialRouteName="Home">
//        <Drawer.Screen name="Home" component={HomeScreen} />
//        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//      </Drawer.Navigator>
//    </NavigationContainer>
//  );
//}