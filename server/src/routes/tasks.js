// Module: Task REST routes.
// Maps HTTP verbs/URLs to controller functions without embedding business logic in the router.
import { Router } from 'express';
import { createTask, deleteTask, getTask, listTasks, updateTask } from '../controllers/tasksController.js';

const router = Router();
router.get('/', listTasks);
router.get('/:id', getTask);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
