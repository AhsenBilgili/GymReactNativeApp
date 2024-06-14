import React from 'react';
import { View, Text } from 'react-native';

const ScheduleTable = () => {
  const schedules = [
    { day: 'Pazartesi', hours: ' Kapalı ' },
    { day: 'Salı', hours: '08:00 - 22:00' },
    { day: 'Çarşamba', hours: '08:00 - 22:00' },
    { day: 'Perşembe', hours: '08:00 - 22:00' },
    { day: 'Cuma', hours: '08:00 - 22:00' },
    { day: 'Cumartesi', hours: '08:00 - 22:00' },
    { day: 'Pazar', hours: '08:00 - 22:00' },
  ];

  return (
    <View style={styles.schedule}>
      {schedules.map((schedule, index) => (
        <View key={index} style={styles.scheduleRow}>
          <Text style={styles.day}>{schedule.day}</Text>
          <Text style={styles.hours}>{schedule.hours}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = {
  schedule: {
    width: '90%', 
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: '5%', 
    
  },
  scheduleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
   
  },
  day: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  hours: {
    fontSize: 16,
    color: '#555',
  },
};




export default ScheduleTable;
