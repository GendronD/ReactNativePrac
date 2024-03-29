import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {LoginViewModel} from './login_viewmodel';
import {AuthUseCaseImpl} from '../../../domain';
import {AuthRepositoryImpl} from '../../../data';
import {ActionButton} from '../../components';
import {primaryButtonStyle, secondaryButtonStyle} from '../../../resources';
import '../../../resources/localization/il8n';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '../../../screen_types';

type LoginViewProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const LoginView: React.FC<LoginViewProps> = props => {
  const authRepository = new AuthRepositoryImpl();
  const authUseCase = new AuthUseCaseImpl(authRepository);
  const loginViewModel = new LoginViewModel(authUseCase);
  const {t} = useTranslation();

  const loginPressed = async () => {
    try {
      await loginViewModel.login();
      props.navigation.navigate('Home');
    } catch {
      return;
    }
  };

  function toSignUp() {
    props.navigation.navigate('SignUp');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('login.title')}</Text>
      <Text style={styles.body}>{t('login.description')}</Text>
      <View style={styles.spacer} />
      <ActionButton
        label={t('login.login_button_label')}
        onPress={loginPressed}
        buttonStyle={primaryButtonStyle.button}
        labelStyle={primaryButtonStyle.label}
      />
      <View style={styles.spacer} />
      <ActionButton
        label={t('login.sign_up_button_label')}
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

export default LoginView;
