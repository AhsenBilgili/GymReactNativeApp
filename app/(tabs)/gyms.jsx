import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Link,router } from 'expo-router';
import { fetchFacilities } from '../../services/api';
import { useNavigation } from '@react-navigation/native';

const Gyms = () => {
  const [gymsData, setGymsData] = useState([]);

  useEffect(() => {
    fetchGymsData();
  }, []);

  const fetchGymsData = async () => {
    try {
      const data = await fetchFacilities();
      setGymsData(data);
    } catch (error) {
      console.error('Error fetching gyms data:', error);
    }
  };

  const handlePress = (gymId) => {
 
    router.push({
      pathname: '/screens/facilityDetail',
      params: {
        id: gymId,
      },
    });
   
      };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item.id)}>
      <View style={styles.item}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.gymName}</Text>
          <Text style={styles.address}>{item.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      <FlatList
        data={gymsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 100,
    height: 165,
    borderRadius: 10,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  address: {
    color: '#777',
  },
});

export default Gyms;
