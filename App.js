import React from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import Chatbot from './src/containers/Chatbot';
import Home from './src/containers/Home';
import PlanningRoute from './src/containers/PlanningRoute';
import RouteMap from './src/containers/RouteMap';
import About from './src/containers/About';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="about">
        <Stack.Screen
          name="about"
          component={About}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="chatbot"
          component={Chatbot}
          options={({navigation}) => ({
            headerLeft: () => (
              <HeaderBackButton
                labelVisible={false}
                onPress={() => navigation.goBack()}
              />
            ),
            headerStyle: {
              backgroundColor: '#03adff',
            },
            headerTitle: 'Chatbot',
          })}
        />
        <Stack.Screen
          name="planning"
          component={PlanningRoute}
          options={({navigation}) => ({
            headerLeft: () => (
              <HeaderBackButton
                labelVisible={false}
                onPress={() => navigation.goBack()}
              />
            ),
            headerStyle: {
              backgroundColor: '#03adff',
            },
            headerTitle: 'Buscar locais',
          })}
        />
        <Stack.Screen
          name="routeMap"
          component={RouteMap}
          options={({navigation}) => ({
            headerLeft: () => (
              <HeaderBackButton
                labelVisible={false}
                onPress={() => navigation.goBack()}
              />
            ),
            headerStyle: {
              backgroundColor: '#03adff',
            },
            headerTitle: 'Rota',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
