import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useAtom } from 'jotai';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Input } from '@/shared/Input/Input';
import { CustomButton as Button } from '@/shared/CustomButton/CustomButton';
import { CustomLink as Link } from '@/shared/CustomLink/CustomLink';
import { loginAtom } from '@/entities/auth/model/auth.state';

import styles from './styles';
import { router } from 'expo-router';

export default function AuthScreen() {
  const [auth, login] = useAtom(loginAtom);
  const { access_token, isLoading } = auth;
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

  const handleSubmit = async (): Promise<void> => {
    await login({ email: userEmail, password: userPassword });
    setUserEmail('');
    setUserPassword('');

    AsyncStorage.getItem('auth').then((data) => console.log(data, 'Auth data after login'));
  };

  useEffect(() => {
    if (access_token && !isLoading) {
      router.replace('..');
    }
  }, [access_token, isLoading]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{'Welcome back to\nMega Shop'}</Text>
        <Text style={styles.subTitle}>Please enter data to login</Text>
      </View>

      <View style={styles.form}>
        <Input
          label='Email'
          placeholder='Enter your Email Address'
          value={userEmail}
          onChangeText={setUserEmail}
        />
        <Input
          label='Password'
          placeholder='Enter Account Password'
          isPassword={true}
          value={userPassword}
          onChangeText={setUserPassword}
        />

        <View style={styles.formControls}>
          <Button
            label='Sign In'
            onPress={handleSubmit}
            loading={isLoading}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <Link href='/restore' label='Forgot Password' labelStyle={styles.footerBtn} fontStyle='medium' />
        <Link href='/product/smartphone' label='Sign Up' labelStyle={styles.footerBtnBlue} fontStyle='medium' />
      </View>
    </View>
  );
}
