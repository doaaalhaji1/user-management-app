import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CreateUserPage from './pages/CreateUserPage';
import UpdateUserPage from './pages/UpdateUserPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/create" element={<CreateUserPage />} />
          <Route path="/user/:id" element={<UpdateUserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
