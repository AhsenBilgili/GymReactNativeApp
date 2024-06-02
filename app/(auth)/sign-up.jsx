import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import FormField from '../components/FormField'
import CustomButton from '../components/CustomButton'
import { Link } from 'expo-router'


const SignUp = () => {
  const [form,setForm]=useState({
    username:'',
    email:'',
    password:''
  })
  const [isSubmitting, setisSubmitting] = useState(false)
  const submit=()=>{}
  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
        <ScrollView >
          <View style={styles.viewContainer}>
            <Text style={styles.text}>Kayıt Ol</Text>
            <FormField
                title="Kullanıcı Adı"
                value={form.email}
                handleChangeText={(e)=>setForm({...form,
                  username:e
                })}
                
            />
            <FormField
                title="Email"
                value={form.email}
                handleChangeText={(e)=>setForm({...form,
                  email:e
                })}
                keyboardType="email-address"
            />
            <FormField
                title="Parola"
                value={form.password}
                handleChangeText={(e)=>setForm({...form,
                  password:e
                })}
            />
            <CustomButton
                title='Kayıt Ol'
                handlePress={submit}
                isLoading={isSubmitting}

            />
        
          </View>
        </ScrollView>

    </SafeAreaView>
  )
}

export default SignUp


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