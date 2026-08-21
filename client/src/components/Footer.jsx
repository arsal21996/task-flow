// Module: Shared footer.
// Provides the same multi-column structure shown in the reference design.
import { CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <div className="brand"><span className="brand-icon"><CheckSquare size={24} /></span><span>TaskFlow</span></div>
        <p>© 2025 TaskFlow. All rights reserved.</p>
      </div>
      <div><h3>Quick Links</h3><Link to="/">Home</Link><Link to="/tasks">Tasks</Link><Link to="/about">About</Link></div>
      <div><h3>Connect</h3><a href="https://github.com/arsal21996/task-flow" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></div>
      <p className="footer-credit">Made with <span aria-hidden="true">❤️</span> by TaskFlow Team</p>
    </footer>
  );
}
