import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useAtom } from 'jotai';
import { loginAtom } from '@/entities/auth';

import {
  Input,
  CustomButton as Button,
  CustomLink as Link,
  CustomAlert as Alert,
} from '@/shared';

import styles from './styles';

export default function AuthScreen() {
  const [auth, login] = useAtom(loginAtom);
  const { access_token, isLoading, error } = auth;
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [showErrorAlert, setShowErrorAlert] = useState<boolean>(false);

  const handleSubmit = async (): Promise<void> => {
    await login({ email: userEmail, password: userPassword });
    setUserEmail('');
    setUserPassword('');
  };

  useEffect(() => {
    if (access_token && !isLoading) {
      router.replace('/(tabs)');
    }
  }, [access_token, isLoading]);

  useEffect(() => {
    if (error) {
      setShowErrorAlert(true);
      return;
    }

  }, [error]);

  const handleAlertPress = () => {
    setShowErrorAlert(false);
  };

  // TODO: Move login form to separate component
  return (
    <SafeAreaView>
      {showErrorAlert && <Alert show text={error || ''} type='error' onPress={handleAlertPress} />}

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
          <Link
            href='/restore'
            label='Forgot Password'
            labelStyle={styles.footerBtn}
            fontStyle='medium'
          />
          <Link
            href='/signup'
            label='Sign Up'
            labelStyle={[styles.footerBtn, styles.footerBtnBlue]}
            fontStyle='medium'
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
