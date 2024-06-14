import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { fetchSpecialCourseById, fetchTrainerById } from '../../services/api'; // Adjust the path if necessary

const CourseDetail = () => {
  const { id } = useLocalSearchParams();
  const [course, setCourse] = useState(null);
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseData = await fetchSpecialCourseById(id);
        console.log('Course Data:', courseData);
        setCourse(courseData);
  
        if (courseData.id) { // Örnek olarak courseData.id'nin mevcut olduğunu varsayalım
          const trainers = await fetchTrainerById(courseData.id);
          console.log('Trainers Data:', trainers);
          setTrainers(trainers);
        } else {
          console.log('No trainers found for this course.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [id]);
  if (!course) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: course.specialCourseImgUrl }} style={styles.image} />
      <Text style={styles.condition}>{course.specialCourseCondition.toUpperCase()}</Text>
      <Text style={styles.heading}>Kurs Hakkında</Text>
      <Text style={styles.definition}>{course.specialCourseDefinition}</Text>
      
      <Text style={styles.heading}>Antrenörler</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {trainers.map((trainer, index) => (
        <View key={index} style={styles.trainerContainer}>
          <Image source={{ uri: trainer.trainerImageUrl }} style={styles.trainerImage} />
          <Text style={styles.trainerName}>{trainer.trainerName}</Text>
        </View>
      ))}
    </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  condition: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  definition: {
    fontSize: 14,
    marginBottom: 16,
  },
  trainerContainer: {
    marginBottom: 16,
  },
  trainerName: {
    fontSize: 16,
    flexDirection: 'row', // Metni yatayda düzenle

  },
  trainerImage: {
    width: 100, // Kartın genişliği
    height: 150, // Kartın yüksekliği
    borderRadius: 5, // Yuvarlatılmış köşeler için
    marginRight: 16, // Kartlar arasındaki boşluk
  },

});

export default CourseDetail;
