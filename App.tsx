import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import {LandingView, LoginView, SignUpView} from './presentation/screens';
import RootStackParamList from './screen_types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <NavigationContainer>
        {
          <Stack.Navigator>
            <Stack.Screen name="Landing" component={LandingView} />
            <Stack.Screen name="Login" component={LoginView} />
            <Stack.Screen name="SignUp" component={SignUpView} />
          </Stack.Navigator>
        }
      </NavigationContainer>
      <Toast />
    </>
  );
}
