
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View,Image } from 'react-native';
import { Link,router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {images} from '../constants';
import CustomButton from './components/CustomButton';

export default function App() {
  return (
    <SafeAreaView >
        <ScrollView contentContainerStyle={{height:'100%', backgroundColor:'#fff'}}>
            <View style={styles.container}>
            <Text style={styles.logoText}>GYMY</Text>

                <Image
                    source={images.login}
                />
            </View>
            <View style={styles.buttonContainer}>
            <CustomButton
              title="Giriş Yap"
              containerStyle={[styles.button, { width: '100%' }]}
              handlePress={() => router.push('/sign-in')}
            />
            <CustomButton
              title="Kayıt Ol"
              containerStyle={[styles.button, { width: '100%', marginTop: 30 }]}
              handlePress={() => router.push('/sign-up')}            />
        </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  buttonContainer: {
    marginBottom:60,
    paddingHorizontal: 40,
    
  },
});
