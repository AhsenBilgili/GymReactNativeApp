// CoursePricing.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PriceTable = ({ paymentTypes, coursePrices }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kurs Fiyatları</Text>
      {paymentTypes.map((type) => (
        <View key={type.paymentTypeId} style={styles.typeContainer}>
          <Text style={styles.typeName}>{type.paymentTypeName}</Text>
          {coursePrices
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
  );
};

const styles = StyleSheet.create({
  container: {
    // Your container styles here
  },
  header: {
    // Header styles here
  },
  typeContainer: {
    // Type container styles here
  },
  typeName: {
    // Type name styles here
  },
  priceContainer: {
    // Price container styles here
  },
  duration: {
    // Duration styles here
  },
  price: {
    // Price styles here
  },
});

export default PriceTable;
