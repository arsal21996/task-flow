// Module: Task controller.
// Validates HTTP input, calls the repository, and converts database results into API responses.
import * as repository from '../repositories/taskRepository.js';

const priorities = new Set(['Low', 'Medium', 'High']);
const statuses = new Set(['Todo', 'In Progress', 'Completed']);

function validateTask(body = {}) {
  const task = {
    title: String(body.title || '').trim(),
    description: String(body.description || '').trim(),
    priority: body.priority || 'Medium',
    status: body.status || 'Todo',
    due_date: body.due_date || '',
  };
  if (!task.title) return 'Title is required.';
  if (!priorities.has(task.priority)) return 'Priority must be Low, Medium, or High.';
  if (!statuses.has(task.status)) return 'Status must be Todo, In Progress, or Completed.';
  return task;
}

export function listTasks(req, res) { res.json(repository.findAll()); }

export function getTask(req, res) {
  const task = repository.findById(Number(req.params.id));
  if (!task) return res.status(404).json({ message: 'Task not found.' });
  return res.json(task);
}

export function createTask(req, res) {
  const result = validateTask(req.body);
  if (typeof result === 'string') return res.status(400).json({ message: result });
  return res.status(201).json(repository.insert(result));
}

export function updateTask(req, res) {
  const id = Number(req.params.id);
  if (!repository.findById(id)) return res.status(404).json({ message: 'Task not found.' });
  const result = validateTask(req.body);
  if (typeof result === 'string') return res.status(400).json({ message: result });
  return res.json(repository.update(id, result));
}

export function deleteTask(req, res) {
  const result = repository.remove(Number(req.params.id));
  if (!result.changes) return res.status(404).json({ message: 'Task not found.' });
  return res.status(204).send();
}
