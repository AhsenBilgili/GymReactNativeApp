import { API_ENDPOINTS } from '../constants/api.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchFacilities = async () => {
  const url = API_ENDPOINTS.GYMS;
  return await fetchData(url);
};

export const fetchFacilitiesDetail = async (id) => {
  const url = API_ENDPOINTS.GYM_DETAIL(id);
  return await fetchData(url);
};

// New function to fetch special courses
export const fetchSpecialCourses = async () => {
  const url = API_ENDPOINTS.SPECIAL_COURSES;
  return await fetchData(url);
};

// New function to fetch a specific special course by ID
export const fetchSpecialCourseById = async (id) => {
  const url = API_ENDPOINTS.SPECIAL_COURSES_ID(id);
  return await fetchData(url);
};

// New function to fetch courses
export const fetchCourses = async () => {
  const url = API_ENDPOINTS.COURSES;
  return await fetchData(url);
};

// New function to fetch trainer by ID
export const fetchTrainerById = async (specialCourseId) => {
  const url = API_ENDPOINTS.TRAINER_ID( specialCourseId);
  console.log(`Fetching from URL: ${url}`);

  return await fetchData(url);
};

// New function to fetch course prices
export const fetchCoursePrices = async () => {
  const url = API_ENDPOINTS.PRICES;
  return await fetchData(url);
};

export const fetchPaymentTypes = async () => {
  const url = API_ENDPOINTS.PAYMENT_TYPES;
  return await fetchData(url);
};
export const fetchCourseId = async (CourseId) => {
  const url = API_ENDPOINTS.COURSE_ID( CourseId);
  console.log(`Fetching from URL: ${url}`);

  return await fetchData(url);
};
export const fetchRegister = async (userData) => {
  const url = API_ENDPOINTS.REGISTER;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      // Hata durumunda yapılacak işlemler
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Hata yakalama
    console.error('Error:', error);
    throw error;
  }
};

export const fetchLogin = async (userData) => {
  const url = API_ENDPOINTS.LOGIN;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      // Hata durumunda yapılacak işlemler
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Hata yakalama
    console.error('Error:', error);
    throw error;
  }
};
export const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem('token', token);
    console.log('Token başarıyla kaydedildi:', token);
  } catch (error) {
    console.error('Token kaydı sırasında hata:', error);
  }
};

export const getToken = async () => {
  try {
    const savedToken = await AsyncStorage.getItem('token');
    return savedToken;
  } catch (error) {
    console.error('Hafızadan token alırken hata:', error);
    return null;
  }
};
export const fetchLogout = async () => {
  const url = API_ENDPOINTS.LOGOUT;

  try {
    const response = await fetch(url, {
      method: 'POST',
    });

    if (!response.ok) {
      // Hata durumunda yapılacak işlemler
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Hata yakalama
    console.error('Error:', error);
    throw error;
  }
};

export const fetchProfile = async () => {
  const token = await AsyncStorage.getItem('token');
  const url = API_ENDPOINTS.USER_PROFILE_ME;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Profile Data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching profile data:', error);
    throw error;
  }
};






