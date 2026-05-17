# Online Shop Frontend v2

React, TypeScript, Vite, Twin Macro, styled-components, Feature-Sliced Design layers, and Redux Toolkit with RTK Query.

## Development

```bash
npm install
npm run dev
```

## Docker

```bash
docker compose up -d --build frontend
```

The app reads the API URL from `VITE_API_BASE_URL`. The default is `http://localhost:8000/api/v1`.

## Structure

The project follows Feature-Sliced Design layers:

- `app`
- `pages`
- `widgets`
- `entities`
- `shared`
- `features` exists for convention, but is intentionally unused.
