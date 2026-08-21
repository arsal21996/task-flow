// Module: Task management page.
// Owns CRUD state, filtering, loading/error feedback, and the task editor modal.
import { useEffect, useMemo, useState } from 'react';
import { Plus, Search, SlidersHorizontal } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { createTask, deleteTask, getTasks, updateTask } from '../api';
import TaskCard from '../components/TaskCard';
import TaskForm from '../components/TaskForm';

export default function Tasks() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tasks, setTasks] = useState([]);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('All');
  const [editor, setEditor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const loadTasks = async () => {
    try { setLoading(true); setError(''); setTasks(await getTasks()); }
    catch (err) { setError(err.message); }
    finally { setLoading(false); }
  };

  useEffect(() => { loadTasks(); }, []);
  useEffect(() => { if (searchParams.get('new') === 'true') setEditor({}); }, [searchParams]);

  const filtered = useMemo(() => tasks.filter((task) => {
    const matchesText = `${task.title} ${task.description || ''}`.toLowerCase().includes(query.toLowerCase());
    return matchesText && (status === 'All' || task.status === status);
  }), [tasks, query, status]);

  const save = async (form) => {
    try { setSubmitting(true); setError(''); if (editor?.id) await updateTask(editor.id, form); else await createTask(form); setEditor(null); setSearchParams({}); await loadTasks(); }
    catch (err) { setError(err.message); }
    finally { setSubmitting(false); }
  };

  const remove = async (task) => {
    if (!window.confirm(`Delete “${task.title}”?`)) return;
    try { await deleteTask(task.id); setTasks((current) => current.filter((item) => item.id !== task.id)); }
    catch (err) { setError(err.message); }
  };

  return (
    <section className="page-section container tasks-page">
      <div className="page-heading"><div><span className="eyebrow">Your workspace</span><h1>Tasks</h1><p>Create, manage, and track everything that needs your attention.</p></div><button className="button button-primary" onClick={() => setEditor({})}><Plus size={18} /> New Task</button></div>
      {error && <div className="alert">{error}</div>}
      <div className="toolbar"><label className="search-box"><Search size={18} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search tasks..." /></label><label className="filter-box"><SlidersHorizontal size={17} /><select value={status} onChange={(e) => setStatus(e.target.value)}><option>All</option><option>Todo</option><option>In Progress</option><option>Completed</option></select></label></div>
      {loading ? <div className="empty-state">Loading your tasks...</div> : filtered.length === 0 ? <div className="empty-state"><div className="empty-icon"><SlidersHorizontal size={28} /></div><h2>No tasks found</h2><p>{tasks.length ? 'Try a different search or filter.' : 'Create your first task and start organizing your work.'}</p><button className="button button-primary" onClick={() => setEditor({})}><Plus size={18} /> Create Task</button></div> : <div className="task-list">{filtered.map((task) => <TaskCard key={task.id} task={task} onEdit={setEditor} onDelete={remove} />)}</div>}
      {editor !== null && <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && setEditor(null)}><div className="modal"><TaskForm initialTask={editor.id ? editor : null} onSubmit={save} onCancel={() => setEditor(null)} submitting={submitting} /></div></div>}
    </section>
  );
}
