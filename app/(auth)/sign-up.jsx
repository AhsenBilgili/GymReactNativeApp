import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import FormField from '../components/FormField'
import CustomButton from '../components/CustomButton'
import { fetchRegister } from '../../services/api'; // fetchRegister fonksiyonunu doğru yol ile içe aktarın

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetchRegister({
        userName: form.username,
        email: form.email,
        password: form.password
      });
      console.log('Success:', response);
      // Başarılı durumda yapılacaklar (örn. navigate etme, mesaj gösterme)
    } catch (error) {
      console.error('Error:', error);
      // Hata durumunda yapılacaklar (örn. hata mesajı gösterme)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      <ScrollView>
        <View style={styles.viewContainer}>
          <Text style={styles.text}>Kayıt Ol</Text>
          <FormField
            title="Kullanıcı Adı"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            keyboardType="email-address"
          />
          <FormField
            title="Parola"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
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
})