import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import FormField from '../components/FormField';
import CustomButton from '../components/CustomButton';
import { fetchRegister } from '../../services/api';
import { router } from 'expo-router'; // router'ı doğru şekilde içe aktardık

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetchRegister({
        userName: form.username,
        email: form.email,
        password: form.password
      });
      console.log('Başarılı:', response);
      // Başarılı durumda yapılacaklar (örn. navigate etme, mesaj gösterme)
    } catch (error) {
      console.error('Hata:', error);
      if (error.response && error.response.status === 400 && error.response.data) {
        const errorMessages = error.response.data;
        let errorMessage = '';
        for (const key in errorMessages) {
          if (errorMessages.hasOwnProperty(key)) {
            errorMessage += errorMessages[key][0] + '\n';
          }
        }
        setErrorMessage(errorMessage);
      } else {
        setErrorMessage('Bilinmeyen bir hata oluştu');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearErrorMessage = () => {
    setErrorMessage('');
  };

  const goToHomePage = () => {
    router.push('/');
  };

  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      <ScrollView>
        <View style={styles.viewContainer}>
          <TouchableOpacity onPress={goToHomePage} style={styles.homeButton}>
            <Text style={styles.homeButtonText}>Ana Sayfa</Text>
          </TouchableOpacity>
          <Text style={styles.text}>Kayıt Ol</Text>
          {errorMessage ? (
            <TouchableOpacity onPress={clearErrorMessage} style={styles.errorMessageContainer}>
              <Text style={styles.errorMessage}>{errorMessage}</Text>
            </TouchableOpacity>
          ) : null}
          <FormField
            title="Kullanıcı Adı"
            value={form.username}
            handleChangeText={(e) => { setForm({ ...form, username: e }); clearErrorMessage(); }}
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => { setForm({ ...form, email: e }); clearErrorMessage(); }}
            keyboardType="email-address"
          />
          <FormField
            title="Parola"
            value={form.password}
            handleChangeText={(e) => { setForm({ ...form, password: e }); clearErrorMessage(); }}
          />
          <CustomButton
            title='Kayıt Ol'
            handlePress={submit}
            isLoading={isSubmitting}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

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
    marginTop: 20,
  },
  homeButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  homeButtonText: {
    fontSize: 16,
    color: '#007BFF',
  },
  errorMessageContainer: {
    backgroundColor: '#ffcccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  errorMessage: {
    color: 'red',
    fontSize: 16,
  },
});
