import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { fetchFacilitiesDetail } from '../../services/api'; // Adjust the path if necessary


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
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.gymName}>{facility.gymName}</Text>
    <Image source={{ uri: facility.imageUrl }} style={styles.image} />
    <Text>{facility.address}</Text>
    <Text style={styles.phoneNumber}>{facility.phone}</Text>

    <Text style={styles.sectionTitle}>Kurslar</Text>
    {facility.specialCourses.map((course) => (
      <View key={course.id} style={styles.specialCourse}>
        <Text style={styles.sectionTitle}>{course.specialCourseName}</Text>
      </View>
    ))}
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  gymName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  phoneNumber: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  specialCourse: {
    marginBottom: 15,
  },
});

export default FacilityDetails;