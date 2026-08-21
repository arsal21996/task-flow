// Module: Individual task presentation.
// Displays status/priority badges and exposes edit/delete actions to the parent page.
import { Check, Pencil, Trash2, Circle } from 'lucide-react';

const statusClass = { Todo: 'status-todo', 'In Progress': 'status-progress', Completed: 'status-completed' };
const priorityClass = { Low: 'priority-low', Medium: 'priority-medium', High: 'priority-high' };

export default function TaskCard({ task, onEdit, onDelete }) {
  const completed = task.status === 'Completed';
  return (
    <article className={`task-card ${completed ? 'is-completed' : ''}`}>
      <div className={`task-check ${completed ? 'checked' : ''}`}>{completed ? <Check size={17} /> : <Circle size={17} />}</div>
      <div className="task-content">
        <div className="task-topline"><h3>{task.title}</h3><span className={`badge ${priorityClass[task.priority] || 'priority-medium'}`}>{task.priority}</span></div>
        {task.description && <p>{task.description}</p>}
        <div className="task-meta"><span className={`badge ${statusClass[task.status] || 'status-todo'}`}>{task.status}</span>{task.due_date && <span>Due {new Date(`${task.due_date}T00:00:00`).toLocaleDateString()}</span>}</div>
      </div>
      <div className="task-actions"><button className="icon-button" onClick={() => onEdit(task)} aria-label={`Edit ${task.title}`}><Pencil size={17} /></button><button className="icon-button danger" onClick={() => onDelete(task)} aria-label={`Delete ${task.title}`}><Trash2 size={17} /></button></div>
    </article>
  );
}
