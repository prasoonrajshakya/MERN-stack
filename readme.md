# MERN Stack Learning Project

A notes app built to learn the MERN stack end to end. The live app is called **ThinkBoard** — create, read, update, and delete notes through a themed React UI backed by an Express + MongoDB API with Upstash-powered rate limiting.

## Overview

ThinkBoard is a full-stack notes application:

- **Create** notes with a title and content.
- **Browse** notes as a responsive card grid.
- **Edit** any note on its detail page.
- **Delete** notes (with confirmation).
- Rate-limited API to prevent abuse.

## Tech Stack

**Frontend**

- React 19
- Vite
- Tailwind CSS (v4)
- daisyUI 5 (theming)
- react-router (v7)
- axios
- react-hot-toast
- lucide-react

**Backend**

- Node.js
- Express (v5)
- Mongoose (MongoDB Atlas)
- @upstash/ratelimit + @upstash/redis (rate limiting)
- cors
- dotenv

## Getting Started

### Prerequisites

- Node.js and npm
- A MongoDB Atlas cluster (free tier works) — you'll need the connection string
- An Upstash Redis REST database (used by the rate limiter) — you'll need the REST URL and token

### 1. Backend

```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend/` directory (this file is gitignored — never commit it):

```
MONGO_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>
PORT=5001
UPSTASH_REDIS_REST_URL=https://<your-instance>.upstash.io
UPSTASH_REDIS_REST_TOKEN=<your-token>
```

- `MONGO_URL` — your MongoDB Atlas connection string.
- `PORT` — server port (defaults to `5001` if unset; the frontend expects `5001`).
- `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` — required, the rate limiter reads these.

Start the server:

```bash
npm run dev
```

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

Open **http://localhost:5173** (the backend's CORS allows exactly this origin).

## API Endpoints

All routes are prefixed with `/api/notes`. The rate limiter applies to every request and returns `429 Too Many Requests` when the limit is exceeded.

| Method   | Endpoint        | Description                | Success response                        |
| -------- | --------------- | -------------------------- | --------------------------------------- |
| `GET`    | `/api/notes`    | List all notes             | `200` → `{ notes: [...] }`              |
| `GET`    | `/api/notes/:id`| Fetch a single note        | `200` → `{ note: {...} }`, `404` if missing |
| `POST`   | `/api/notes`    | Create a note              | `201` → `{ note: {...} }`               |
| `PUT`    | `/api/notes/:id`| Update a note's title/content | `200` → `{ message }`, `404` if missing |
| `DELETE` | `/api/notes/:id`| Delete a note              | `200` → `{ message }`, `404` if missing |

**Request body** for `POST` and `PUT`:

```json
{
  "title": "My note",
  "content": "Some content"
}
```

## Progress

- [x] Project Setup
- [x] Backend Setup (Node.js & Express)
- [x] Database Integration (MongoDB)
- [x] API Development
- [x] React Frontend
- [x] CRUD Functionality
- [x] Deployment
