import React, { useState } from 'react';
import { createUser } from '../services/api';
import '../styles.css'; 

const CreateUserPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    phone: '',
    email: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
      const newUser = await createUser(formData);
      setSuccessMessage(`User ${newUser.firstName} created successfully!`);
      setFormData({ firstName: '', lastName: '', age: '', phone: '', email: '' });
    } catch (error) {
      setErrorMessage('Failed to create user. Please try again.');
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="home-page">
      <h1>Create New User</h1>
      {successMessage && <p style={{ color: 'green' , textAlign:'center'}}>{successMessage}</p>}
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
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUserPage;