import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground ,TouchableOpacity} from 'react-native';
import { fetchFacilitiesDetail } from '../../services/api'; 
import ScheduleTable from '../components/ScheduleTable';

const FacilityDetails = () => {
  const { id } = useLocalSearchParams();
  const [facility, setFacility] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFacilitiesDetail(id);
      setFacility(data);
    };

    fetchData();
  }, [id]);

  if (!facility) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <ImageBackground source={{ uri: facility.imageUrl }} style={styles.image}>
        <View style={styles.imageOverlay}>
          <Text style={styles.gymName}>{facility.gymName.toUpperCase()}</Text>
        </View>
      </ImageBackground>
     

      <View style={styles.content}>
        {/* <Text style={styles.address}>{facility.address}</Text>
        <Text style={styles.phoneNumber}>{facility.phone}</Text> */}

        <Text style={styles.sectionTitle}>ÇALIŞMA SAATLERİ</Text>
        <ScheduleTable style={styles.container}/>
        <Text style={styles.sectionTitle}>TESİS İMKANLARI</Text>
        <View style={styles.courseContainer}>
          {facility.specialCourses.map((course) => (
            <TouchableOpacity key={course.id} style={styles.courseButton}>
              <Text style={styles.courseButtonText}>{course.specialCourseName}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  gymName: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover', 
  },
  imageOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Siyah renk, %70 saydamlık
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    padding: 10,
  },
  address: {
    marginBottom: 10,
    textAlign: 'center',
  },
  phoneNumber: {
    marginBottom: 10,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'left',
  },


  courseContainer: {
    flexDirection: 'row', // Yatay düzende sıralama
    flexWrap: 'wrap', // Sığmayanları alt satıra geçir
    justifyContent: 'center', // Ortalama
  },
  courseButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#04364A',
    borderRadius: 10,
    margin: 10,
    width: '40%', // Genişlik ayarı
    alignItems: 'center', // İçeriği ortala
  },
  courseButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  courseName: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#04364A',
    textAlign: 'center',
  },
});

export default FacilityDetails;
