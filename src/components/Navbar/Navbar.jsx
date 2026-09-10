import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul className="nav-links">
        <li className="nav-item active">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Project</li>
        <li className="nav-item">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
