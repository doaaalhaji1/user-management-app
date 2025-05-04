import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { updateUser, fetchUsers } from '../services/api';
import '../styles.css'; 

const UpdateUserPage = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    phone: '',
    email: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        const { users } = await fetchUsers();
        const user = users.find((user) => user.id === parseInt(id));
        if (user) {
          setFormData({
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age,
            phone: user.phone,
            email: user.email,
          });
        } else {
          setErrorMessage('User not found.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setErrorMessage('Failed to load user data.');
      }
    };
    getUserData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(id, formData);
      setSuccessMessage('User updated successfully!');
    } catch (error) {
      setErrorMessage('Failed to update user. Please try again.');
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="home-page">
      <h1>Update User</h1>
      {successMessage && <p style={{ color: 'green', textAlign:'center'}}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' , textAlign:'center'}}>{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="add-user-link">
          Update User
        </button>
      </form>
    </div>
  );
};

export default UpdateUserPage;