import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../components/FormField';
import CustomButton from '../components/CustomButton';
import { Link, router } from 'expo-router';
import { fetchLogin, storeToken } from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetchLogin({
        email: form.email,
        password: form.password
      });
      console.log('Success:', response);

      if (response.token) {
        await storeToken(response.token);
        router.push('/gyms');
      } else {
        console.error('No token received in response:', response);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      <ScrollView>
        <View style={styles.viewContainer}>
          <Text style={styles.text}>Giriş Yap</Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            keyboardType="email-address"
          />
          <FormField
            title="Şifre"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            secureTextEntry
          />
          <CustomButton
            title='Giriş Yap'
            handlePress={submit}
            isLoading={isSubmitting}
          />
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Hesabın yok mu?</Text>
            <Link href="/sign-up" style={styles.signupLink}>Kayıt Ol</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaViewContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  viewContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 20,
    marginVertical: 30,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    marginTop: 120,
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupText: {
    fontSize: 16,
    color: '#000',
  },
  signupLink: {
    fontSize: 16,
    fontWeight: '600',
    color: '#04364A',
    marginLeft: 5,
  },
});

export default SignIn;
