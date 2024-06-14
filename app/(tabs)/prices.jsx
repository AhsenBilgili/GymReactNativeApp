import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { fetchCoursePrices, fetchPaymentTypes, fetchCourseId } from '../../services/api'; // Yolu gerekirse ayarlayın

const Prices = () => {
  const [coursePrices, setCoursePrices] = useState([]);
  const [paymentTypes, setPaymentTypes] = useState([]);
  const [courses, setCourses] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCoursePrices = await fetchCoursePrices();
        const fetchedPaymentTypes = await fetchPaymentTypes();
        setPaymentTypes(fetchedPaymentTypes);
        setCoursePrices(fetchedCoursePrices);

        const groupedCourses = {};
        fetchedCoursePrices.forEach((price) => {
          if (!groupedCourses[price.courseId]) {
            groupedCourses[price.courseId] = [];
          }
          groupedCourses[price.courseId].push(price);
        });

        // Fetch course names
        const courseNames = {};
        for (const courseId in groupedCourses) {
          const course = await fetchCourseId(courseId);
          courseNames[courseId] = course.courseName;
        }

        setCourses({ groupedCourses, courseNames });
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      }
    };

    fetchData();
  }, []);

  if (Object.keys(courses).length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {Object.keys(courses.groupedCourses).map((courseId) => (
        <View key={courseId} style={styles.courseContainer}>
          <View style={styles.name} ><Text style={styles.courseName}> {courses.courseNames[courseId]}</Text></View>
          {paymentTypes.map((type) => (
            <View key={type.paymentTypeId} style={styles.typeContainer}>
              <Text style={styles.typeName}>{type.paymentTypeName}</Text>
              {courses.groupedCourses[courseId]
                .filter((price) => price.paymentTypeId === type.paymentTypeId)
                .map((price) => (
                  <View key={price.coursePriceId} style={styles.priceContainer}>
                    <Text style={styles.duration}>{price.courseLong}</Text>
                    <Text style={styles.price}>{price.price} TL</Text>
                  </View>
                ))}
            </View>
          ))}
        </View>
      ))}
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
  name:{
    alignItems:'center',
    backgroundColor:'#EFD132',
  },
  courseContainer: {
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#ddd',
    padding: 8,
    borderRadius: 8,
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  typeContainer: {
    marginBottom: 16,
  },
  typeName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  duration: {
    flex: 1,
    marginRight: 8,
  },
  price: {
    flex: 1,
    textAlign: 'right',
  },
});

export default Prices;
