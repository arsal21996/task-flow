// Module: Landing page.
// Recreates the supplied hero layout while using real links into the task manager.
import { ArrowRight, Check, ListChecks, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero container">
        <div className="hero-copy">
          <span className="eyebrow">Simple task management</span>
          <h1>Organize your work.<br />Simplify your life.</h1>
          <p>TaskFlow helps you create, manage, and track your tasks in one clean and simple place.</p>
          <div className="hero-actions"><Link className="button button-primary" to="/tasks?new=true">Get Started <ArrowRight size={18} /></Link><Link className="button button-secondary" to="/tasks">View Tasks</Link></div>
        </div>
        <div className="hero-visual" aria-label="Task dashboard preview">
          <div className="window-bar"><i></i><i></i><i></i></div>
          <div className="preview-body"><aside><div className="preview-check"><Check size={19} /></div><span></span><span></span><span></span><span></span></aside><div className="preview-list"><div className="preview-row"><span className="fake-checkbox"></span><div><b></b><em></em></div><span className="badge priority-high">High</span></div><div className="preview-row"><span className="fake-checkbox"></span><div><b></b><em></em></div><span className="badge priority-medium">In Progress</span></div><div className="preview-row"><span className="fake-checkbox"></span><div><b></b><em></em></div><span className="badge priority-low">Completed</span></div></div></div>
          <div className="plant" aria-hidden="true"><span></span><span></span><span></span><div></div></div>
        </div>
      </section>
      <section className="feature-strip container"><Feature icon={<Plus />} title="Create Tasks" text="Add tasks quickly and easily with all the important details." /><Feature icon={<ListChecks />} title="Manage Tasks" text="View, update, and organize your tasks all in one place." /><Feature icon={<Trash2 />} title="Delete Tasks" text="Remove tasks you no longer need with a single click." danger /></section>
    </div>
  );
}

function Feature({ icon, title, text, danger }) { return <div className="feature"><div className={`feature-icon ${danger ? 'danger-icon' : ''}`}>{icon}</div><div><h2>{title}</h2><p>{text}</p></div></div>; }
