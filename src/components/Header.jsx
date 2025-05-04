import { Link } from "react-router-dom";
import '../styles.css'; 

export default function Header() {
  return (
    <header className="header">
       
      <nav>
     <a href="/"><img src="https://i.pinimg.com/736x/7e/25/10/7e2510993f1fd15fd7806b8dea12f53a.jpg" alt="logo" className='logo'/></a>

      <Link to="/" className="nav-link">Home</Link>
      </nav>
      <Link to="/user/create" className="add-user-link">Create New User</Link>
    </header>
  );
}