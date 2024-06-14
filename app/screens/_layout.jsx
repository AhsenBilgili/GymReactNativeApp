import { View, Text } from 'react-native'
import React from 'react'
import {Stack} from'expo-router'
import { StatusBar } from 'expo-status-bar'
import FacilityDetails from './facilityDetail'

const AuthLayout = () => {
  return (
   
    <Stack>
      <Stack.Screen
           name="facilityDetails"
           options={{
           
            headerShown: false, 
           }}      
      />
       <Stack.Screen
           name="courseDetail"
           options={{
            headerShown: false, 
           }}      
      />
    </Stack>

   
  
  )
}

export default AuthLayout