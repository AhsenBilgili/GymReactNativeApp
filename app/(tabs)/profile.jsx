import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchProfile } from '../../services/api'; // fetchProfile fonksiyonunu import edin

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const token = await getToken();
      if (!token) {
        console.error('Token is not available');
        setLoading(false); // Loading durumunu false yapın
        return;
      }

      const data = await fetchProfile(token); // Token'i parametre olarak gönderin
      console.log('Profile Data:', data);
      setProfileData(data); // Profil verilerini state'e kaydedin
      setLoading(false); // Loading durumunu false yapın
    } catch (error) {
      console.error('Error fetching profile data:', error);
      setLoading(false); // Loading durumunu false yapın
    }
  };

  const getToken = async () => {
    try {
      const savedToken = await AsyncStorage.getItem('token');
      return savedToken;
    } catch (error) {
      console.error('Error getting token from storage:', error);
      return null;
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Profil</Text>
        <Text>Profil yükleniyor...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil</Text>
      {profileData ? (
        <View style={styles.profileContainer}>
          <Text>Kullanıcı Adı: {profileData.userName}</Text>
          <Text>Email: {profileData.email}</Text>
          {/* Diğer profil bilgilerini buraya ekleyebilirsiniz */}
        </View>
      ) : (
        <Text>Profil bilgileri bulunamadı.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    borderRadius: 10,
  },
});

export default Profile;
