// Module: Express server bootstrap.
// Configures middleware, mounts API routes, and starts the HTTP server.
import express from 'express';
import cors from 'cors';
import tasksRouter from './routes/tasks.js';

const app = express();
const port = Number(process.env.PORT || 5000);

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ status: 'ok', service: 'task-flow-api' }));
app.use('/api/tasks', tasksRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal server error.' });
});

app.listen(port, () => console.log(`TaskFlow API running on http://localhost:${port}`));
