# TaskFlow

TaskFlow is a clean, responsive full-stack task manager recreated from the supplied UI reference. It includes a React frontend, an Express REST API, and SQLite persistence.

## Architecture

```text
┌──────────────────────────────┐
│        React + Vite          │
│  Home / Tasks / About pages  │
│  Components + API client     │
└──────────────┬───────────────┘
               │ HTTP / JSON
               ▼
┌──────────────────────────────┐
│       Express backend        │
│  REST routes + validation    │
│  CRUD service/controller     │
└──────────────┬───────────────┘
               │ SQL
               ▼
┌──────────────────────────────┐
│          SQLite              │
│      server/data/tasks.db    │
└──────────────────────────────┘
```

### Frontend modules

- `client/src/App.jsx` — application routing and top-level page structure.
- `client/src/api.js` — single place for frontend/backend API calls.
- `client/src/components/` — reusable navbar, footer, task form, and task card modules.
- `client/src/pages/` — Home, Tasks, and About page modules.
- `client/src/styles.css` — visual system matching the supplied screenshot: indigo accents, spacious cards, soft shadows, responsive layout.

### Backend modules

- `server/src/server.js` — Express application bootstrap and middleware.
- `server/src/db.js` — SQLite connection and schema initialization.
- `server/src/routes/tasks.js` — REST endpoint definitions.
- `server/src/controllers/tasksController.js` — request handling and validation.
- `server/src/repositories/taskRepository.js` — database access isolated from HTTP logic.

## Features

- Create, read, update, and delete tasks.
- Priority levels: Low, Medium, High.
- Statuses: Todo, In Progress, Completed.
- Task due dates and descriptions.
- Search and status filtering.
- Responsive design for desktop, tablet, and mobile.
- Persistent SQLite storage.
- Clear module comments throughout the source so the project is easy to study.

## Run locally

### Requirements

- Node.js 18+
- npm

### Install

```bash
npm run install:all
```

### Start both applications

```bash
npm run dev
```

Frontend: `http://localhost:5173`

Backend: `http://localhost:5000`

Health check: `http://localhost:5000/api/health`

## API

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/tasks` | List tasks |
| GET | `/api/tasks/:id` | Get one task |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |
| GET | `/api/health` | API health check |

## Design reference

The UI follows the uploaded TaskFlow reference: white navigation bar, indigo primary actions, large two-line hero heading, task dashboard illustration area, three feature cards, and a muted multi-column footer. The application is intentionally implemented with real interactive controls rather than a static image recreation.
