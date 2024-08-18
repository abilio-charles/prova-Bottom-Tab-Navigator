import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // Importe o pacote de ícones
import { StatusBar } from 'react-native'; // Importe o StatusBar

import HomeScreen from './screens/HomeScreen';
import CalculatorScreen from './screens/CalculatorScreen';
import ListScreen from './screens/ListScreen';
import GalleryScreen from './screens/GalleryScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content" // Define o estilo do texto da barra de status
        backgroundColor="#007BFF" // Define a cor de fundo da barra de status
      />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Calculator') {
                iconName = focused ? 'calculator' : 'calculator-outline';
              } else if (route.name === 'List') {
                iconName = focused ? 'list' : 'list-outline';
              } else if (route.name === 'Gallery') {
                iconName = focused ? 'images' : 'images-outline';
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#007BFF', // Cor dos ícones ativos
            tabBarInactiveTintColor: '#6c757d', // Cor dos ícones inativos
            tabBarStyle: {
              backgroundColor: '#f8f9fa', // Cor de fundo da barra de navegação (cinza claro)
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Calculator" component={CalculatorScreen} />
          <Tab.Screen name="List" component={ListScreen} />
          <Tab.Screen name="Gallery" component={GalleryScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
