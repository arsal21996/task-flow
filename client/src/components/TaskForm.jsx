// Module: Task create/edit form.
// Reused by the Tasks page for both creating a new task and editing an existing one.
import { useEffect, useState } from 'react';

const emptyTask = { title: '', description: '', priority: 'Medium', status: 'Todo', due_date: '' };

export default function TaskForm({ initialTask, onSubmit, onCancel, submitting }) {
  const [form, setForm] = useState(initialTask || emptyTask);
  useEffect(() => { setForm(initialTask || emptyTask); }, [initialTask]);
  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  const submit = (event) => { event.preventDefault(); onSubmit(form); };

  return (
    <form className="task-form" onSubmit={submit}>
      <div className="form-heading"><div><span className="eyebrow">Task editor</span><h2>{initialTask ? 'Update task' : 'Create a task'}</h2></div><button type="button" className="icon-button" onClick={onCancel} aria-label="Close form">×</button></div>
      <label>Task title<input name="title" value={form.title} onChange={update} placeholder="e.g. Finish project proposal" required /></label>
      <label>Description<textarea name="description" value={form.description} onChange={update} placeholder="Add a little context..." rows="4" /></label>
      <div className="form-grid"><label>Priority<select name="priority" value={form.priority} onChange={update}><option>Low</option><option>Medium</option><option>High</option></select></label><label>Status<select name="status" value={form.status} onChange={update}><option>Todo</option><option>In Progress</option><option>Completed</option></select></label></div>
      <label>Due date<input type="date" name="due_date" value={form.due_date || ''} onChange={update} /></label>
      <div className="form-actions"><button type="button" className="button button-secondary" onClick={onCancel}>Cancel</button><button className="button button-primary" disabled={submitting}>{submitting ? 'Saving...' : initialTask ? 'Save Changes' : 'Create Task'}</button></div>
    </form>
  );
}
