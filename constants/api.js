const BASE_URL = 'http://localhost:63652'; 

export const API_ENDPOINTS = {
  GYMS: `${BASE_URL}/facilities`,
  GYM_DETAIL: (id) =>`${BASE_URL}/${id}`,
  SPECIAL_COURSES: `${BASE_URL}/api/SpecialCourses/getcourses`,
  SPECIAL_COURSES_ID: (id) =>`${BASE_URL}/api/SpecialCourses/${id}`,
  COURSES:  `${BASE_URL}/api/Course/getcourses`,
  COURSE_ID: (id) => `${BASE_URL}/api/Course/getcourse/${id}`,
  TRAINER_ID:(specialCourseId) =>`${BASE_URL}/${specialCourseId}/trainers`,
  PRICES:`${BASE_URL}/api/CoursePrice/getcourseprices`,
  PAYMENT_TYPES: `${BASE_URL}/api/PaymentType/getpaymenttypes`,
  REGISTER:`${BASE_URL}/Account/register`,
  LOGIN:`${BASE_URL}/Account/login`,
  LOGOUT:`${BASE_URL}/Account/logout`,

};
