
import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../services/api';
import UserCard from '../components/UserCard';
import '../styles.css'; 

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data.users);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="home-page">
      <h1>User Management</h1>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div className="card-container">
          {users.map((user) => (
            <UserCard
              key={user.id}
              image={user.image}
              firstName={user.firstName}
              lastName={user.lastName}
              phone={user.phone}
              email={user.email}
              onUpdate={() => {
                window.location.href = `/user/${user.id}`;
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;