import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {SignUpViewModel} from './sign_up_viewmodel';
import {AuthUseCaseImpl} from '../../../domain';
import {AuthRepositoryImpl} from '../../../data';
import {ActionButton} from '../../components';
import {primaryButtonStyle, secondaryButtonStyle} from '../../../resources';
import '../../../resources/localization/il8n';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '../../../screen_types';

type SignUpViewProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export const SignUpView: React.FC<SignUpViewProps> = props => {
  const authRepository = new AuthRepositoryImpl();
  const authUseCase = new AuthUseCaseImpl(authRepository);
  const signUpViewModel = new SignUpViewModel(authUseCase);
  const {t} = useTranslation();

  const signUpPressed = async () => {
    try {
      await signUpViewModel.signUp();
      props.navigation.navigate('Home');
    } catch {
      return;
    }
  };

  function toLogin() {
    props.navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('sign_up.title')}</Text>
      <Text style={styles.body}>{t('sign_up.description')}</Text>
      <View style={styles.spacer} />
      <ActionButton
        label={t('sign_up.sign_up_button_label')}
        onPress={signUpPressed}
        buttonStyle={primaryButtonStyle.button}
        labelStyle={primaryButtonStyle.label}
      />
      <View style={styles.spacer} />
      <ActionButton
        label={t('sign_up.login_button_label')}
        onPress={() => toLogin()}
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

export default SignUpView;
