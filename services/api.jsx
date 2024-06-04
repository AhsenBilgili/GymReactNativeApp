import { API_ENDPOINTS } from '../constants/api.js';

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
