import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import FormField from '../components/FormField'
import CustomButton from '../components/CustomButton'
import { Link } from 'expo-router'
import { fetchLogin } from '../../services/api';
import { router } from 'expo-router'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Giriş işlemini gerçekleştiren fonksiyon
  const submit = async () => {
    setIsSubmitting(true);
    try {
      // fetchLogin fonksiyonunu kullanarak giriş yap
      const response = await fetchLogin({
        email: form.email,
        password: form.password
      });
      console.log('Success:', response);

      if(response.token){
        router.push('/gyms')
      }
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
          <Text style={styles.text}>Giriş Yap</Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
          />
          <CustomButton
            title='Giriş Yap'
            handlePress={submit}
            isLoading={isSubmitting}
          />
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Hesabın yok mu?</Text>
            <Link href="/signup" style={styles.signupLink}>Kayıt Ol</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;


const styles = StyleSheet.create({
  SafeAreaViewContainer: {
    backgroundColor: '#fff', // bg-primary eşdeğeri
    flex: 1,                    // h-full eşdeğeri
  },
  viewContainer: {
    width: '100%',           // w-full eşdeğeri
    justifyContent: 'center', // flex'ın içeriğini yatayda ortalar
    alignItems: 'center',     // flex'ın içeriğini dikeyde ortalar
    height: '100%',          // h-full eşdeğeri
    paddingHorizontal: 20,    // px-4 eşdeğeri
    marginVertical: 30,       // my-6 eşdeğeri
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
    color: '#04364A', // text-secondary eşdeğeri
    marginLeft: 5,
  },
});