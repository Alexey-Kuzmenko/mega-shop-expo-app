import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Input } from '@/components/Input/Input';
import { CustomButton as Button } from '@/components/CustomButton/CustomButton';

export default function HomeScreen() {
  const width = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{`Welcome back to\nMega Shop`}</Text>
        <Text style={styles.subTitle}>Please enter data to login</Text>
      </View>

      <View style={styles.form}>
        <Input
          label='Email'
          placeholder='Enter your Email Address'
        />
        <Input
          label='Password'
          placeholder='Enter Account Password'
          isPassword={true}
        />

        <View style={styles.formControls}>
          <Button
            label='Sign In'
          />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerBtn}>Forgot Password</Text>
        <Text style={styles.footerBtnBlue}>Sign Up</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingTop: '34%',
    paddingLeft: 25,
    paddingRight: 25,
    height: '100%'
  },
  content: {
    marginBottom: 25,
    rowGap: 20
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 25,
    color: '#0C1A30'
  },
  subTitle: {
    fontSize: 14,
    lineHeight: 25,
    fontWeight: '400',
    color: '#838589'
  },
  form: {
    paddingTop: 25,
    rowGap: 30
  },
  formControls: {
    paddingTop: 85
  },
  formButton: {
    backgroundColor: '#3669C9'
  },
  footer: {
    marginTop: 'auto',
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footerBtn: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 14,
    color: '#0C1A30'
  },
  footerBtnBlue: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 14,
    color: '#3669C9'
  }
})