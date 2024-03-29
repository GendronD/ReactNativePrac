import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import '../../../resources/localization/il8n';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '../../../screen_types';

type HomeViewProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeView: React.FC<HomeViewProps> = () => {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('home.title')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  body: {
    fontSize: 16,
    marginBottom: 8,
  },
  spacer: {
    height: 20,
    backgroundColor: 'transparent',
  },
});

export default HomeView;
