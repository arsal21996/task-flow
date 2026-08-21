// Module: Task repository.
// This layer contains SQL only. Keeping database operations here makes the controller easier to read and test.
import db from '../db.js';

export function findAll() { return db.prepare('SELECT * FROM tasks ORDER BY created_at DESC, id DESC').all(); }
export function findById(id) { return db.prepare('SELECT * FROM tasks WHERE id = ?').get(id); }
export function insert(task) {
  const result = db.prepare(`INSERT INTO tasks (title, description, priority, status, due_date) VALUES (?, ?, ?, ?, ?)`).run(task.title, task.description, task.priority, task.status, task.due_date);
  return findById(result.lastInsertRowid);
}
export function update(id, task) {
  db.prepare(`UPDATE tasks SET title = ?, description = ?, priority = ?, status = ?, due_date = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`).run(task.title, task.description, task.priority, task.status, task.due_date, id);
  return findById(id);
}
export function remove(id) { return db.prepare('DELETE FROM tasks WHERE id = ?').run(id); }
