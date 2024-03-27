import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {LoginViewModel} from './login_viewmodel';
import {AuthUseCaseImpl} from '../../../domain';
import {AuthRepositoryImpl} from '../../../data';
import {ActionButton} from '../../components';
import {primaryButtonStyle} from '../../../resources';

const LoginView: React.FC = () => {
  const authRepository = new AuthRepositoryImpl();
  const authUseCase = new AuthUseCaseImpl(authRepository);
  const loginViewModel = new LoginViewModel(authUseCase);
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('greeting')}</Text>
      <Text>{t('welcome')}</Text>
      <ActionButton
        label="Login"
        onPress={() => loginViewModel.login()}
        buttonStyle={primaryButtonStyle.container}
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
});

export default LoginView;
