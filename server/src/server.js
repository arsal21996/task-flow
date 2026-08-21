// Module: Express server bootstrap.
// Configures middleware, mounts API routes, and starts the HTTP server.
import express from 'express';
import cors from 'cors';
import tasksRouter from './routes/tasks.js';

const app = express();
const port = Number(process.env.PORT || 5000);

app.use(cors());
app.use(express.json());

// Module: Backend landing endpoint.
// Visiting http://localhost:5000 directly now gives a useful API status response
// instead of Express's default "Cannot GET /" message.
app.get('/', (req, res) => {
  res.json({
    name: 'TaskFlow API',
    status: 'running',
    message: 'TaskFlow backend is running successfully.',
    endpoints: {
      health: '/api/health',
      tasks: '/api/tasks',
    },
  });
});

// Module: Health check endpoint.
// Useful for quickly confirming that the backend process is alive.
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'task-flow-api' });
});

// Module: Task API routes.
// All CRUD operations are available under /api/tasks.
app.use('/api/tasks', tasksRouter);

// Module: Global error handler.
// Prevents unexpected server errors from exposing internal details to clients.
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal server error.' });
});

app.listen(port, () => {
  console.log(`TaskFlow API running on http://localhost:${port}`);
});
