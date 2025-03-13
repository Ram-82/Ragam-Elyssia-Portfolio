
import express from 'express';
import { registerRoutes } from "./routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register API routes only, not static files
(async () => {
  await registerRoutes(app);
})();

// For Vercel, we only need to handle API routes
// Static files will be handled by Vercel's static file serving
export default app;
