const BASE_URL = 'http://localhost:63652'; 

export const API_ENDPOINTS = {
  GYMS: `${BASE_URL}/facilities`,
  GYM_DETAIL: (id) =>`${BASE_URL}/${id}`,
  SPECIAL_COURSES: `${BASE_URL}/api/SpecialCourses/getcourses`,
  SPECIAL_COURSES_ID: (id) =>`${BASE_URL}/api/SpecialCourses/${id}`,
  COURSES:  `${BASE_URL}/api/Course/getcourses`,
  TRAINER_ID:(specialCourseId) =>`${BASE_URL}/${specialCourseId}/trainers`,
  PRICES:`${BASE_URL}/api/CoursePrice/getcourseprices`,

};
