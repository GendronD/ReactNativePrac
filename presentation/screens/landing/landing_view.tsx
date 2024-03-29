import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {ActionButton} from '../../components';
import {primaryButtonStyle, secondaryButtonStyle} from '../../../resources';
import '../../../resources/localization/il8n';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '../../../screen_types';

type LandingViewProps = NativeStackScreenProps<RootStackParamList, 'Landing'>;

export const LandingView: React.FC<LandingViewProps> = props => {
  const {t} = useTranslation();

  function toLogin() {
    props.navigation.navigate('Login');
  }
  function toSignUp() {
    props.navigation.navigate('SignUp');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('landing.title')}</Text>
      <Text style={styles.body}>{t('landing.description')}</Text>
      <View style={styles.spacer} />
      <ActionButton
        label={t('landing.login_button_label')}
        onPress={() => toLogin()}
        buttonStyle={primaryButtonStyle.button}
        labelStyle={primaryButtonStyle.label}
      />
      <View style={styles.spacer} />
      <ActionButton
        label={t('landing.sign_up_button_label')}
        onPress={() => toSignUp()}
        buttonStyle={secondaryButtonStyle.button}
        labelStyle={secondaryButtonStyle.label}
      />
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

export default LandingView;
