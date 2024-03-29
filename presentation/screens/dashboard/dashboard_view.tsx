import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {useTranslation} from 'react-i18next';
import '../../../resources/localization/il8n';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RootStackParamList from '../../../screen_types';
import {HomeView, SettingsView} from '..';

type DashboardViewProps = NativeStackScreenProps<
  RootStackParamList,
  'Dashboard'
>;

const Tab = createBottomTabNavigator<RootStackParamList>();

export const DashboardView: React.FC<DashboardViewProps> = () => {
  // const {t} = useTranslation();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeView}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsView}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   body: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   spacer: {
//     height: 20,
//     backgroundColor: 'transparent',
//   },
// });

export default DashboardView;
