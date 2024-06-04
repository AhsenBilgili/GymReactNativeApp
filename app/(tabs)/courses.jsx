import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { fetchSpecialCourses } from '../../services/api';
import { router } from 'expo-router';

const Courses = () => {
  const [specialCourses, setSpecialCourses] = useState([]);

  useEffect(() => {
    fetchSpecialCoursesData();
  }, []);

  const fetchSpecialCoursesData = async () => {
    try {
      const data = await fetchSpecialCourses();
      setSpecialCourses(data);
    } catch (error) {
      console.error('Error fetching special courses data:', error);
    }
  };

  const handlePress = (courseId) => {
    router.push({
      pathname: '/screens/courseDetail',
      params: {
        id: courseId,
      },
    });
  };

  const renderColumn = (columnCourses) => (
    <View style={styles.column}>
      {columnCourses.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => handlePress(item.id)}>
          <View style={styles.card}>
            <ImageBackground source={{ uri: item.specialCourseImgUrl }} style={styles.image} resizeMode="cover">
              <Text style={styles.overlay}>{item.specialCourseName.toUpperCase()}</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderColumns = () => {
    const columns = [[], []];
    specialCourses.forEach((item, index) => {
      columns[index % 2].push(item);
    });
    return (
      <View style={styles.columnsContainer}>
        {columns.map((columnCourses, index) => (
          <View key={index} style={styles.columnWrapper}>{renderColumn(columnCourses)}</View>
        ))}
      </View>
    );
  };

  return <View style={styles.container}>{renderColumns()}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnsContainer: {
    flexDirection: 'row',
  },
  columnWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  column: {
    width: '100%',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 5,
    height: 290,
    width: 150,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-start',
  },
  overlay: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
});

export default Courses;
