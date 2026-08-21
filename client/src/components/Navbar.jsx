// Module: Top navigation.
// Mirrors the reference header and highlights the active page automatically.
import { CheckSquare } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="TaskFlow home">
        <span className="brand-icon"><CheckSquare size={24} strokeWidth={2.6} /></span>
        <span>TaskFlow</span>
      </Link>
      <nav className="nav-links" aria-label="Primary navigation">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/tasks" className={({ isActive }) => isActive ? 'active' : ''}>Tasks</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
      </nav>
      <Link className="button button-primary nav-cta" to="/tasks?new=true">Get Started</Link>
    </header>
  );
}
