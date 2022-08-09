import { CSSProperties } from 'react';
import { Routes, Route, Link, Navigate, NavLink } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import User from './pages/User';

function App() {
  const activeStyle: CSSProperties = {
    color: 'red',
  };

  return (
    <div className="App">
      <header>
        <Link to="/home">Home</Link>
        <Link style={{ color: 'blue' }} to="/about">
          About
        </Link>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          About
        </NavLink>
      </header>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* <Route path="/users" element={<Users />} /> */}
        <Route path="/users/:id" element={<User />} />
        <Route path="/products/:id" element={<User />} />
        <Route path="*" element={<Navigate to="/about" />} />
      </Routes>

      <footer>
        <h1>This is the footer</h1>
      </footer>
    </div>
  );
}

export default App;
