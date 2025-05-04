import axios from 'axios';

const API_URL = 'https://dummyjson.com/users';

// جلب قائمة المستخدمين
export const fetchUsers = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data; 
};

// إضافة مستخدم جديد
export const createUser = async (userData) => {
  const response = await axios.post(`${API_URL}/add`, userData);
  return response.data; 
};

// تحديث بيانات مستخدم
export const updateUser = async (userId, updatedData) => {
  const response = await axios.put(`${API_URL}/${userId}`, updatedData);
  return response.data; 
};
