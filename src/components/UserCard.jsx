// UserCard.js
import React from 'react';
import '../styles.css'; 

const UserCard = ({ image, firstName, lastName, phone, email, onUpdate }) => {
  return (
    <div className="user-card">
      <img
        src={image}
        alt={`${firstName} ${lastName}`}
        className="user-image"
      />
      <div className="info">
        <h3>{`${firstName} ${lastName}`}</h3>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <button onClick={onUpdate} className="update-button">
          Update
        </button>
      </div>
    </div>
  );
};

export default UserCard;