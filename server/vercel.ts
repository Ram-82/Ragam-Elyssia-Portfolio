import express from 'express';
import { registerRoutes } from "./routes";
import { serveStatic } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup routes for Vercel
(async () => {
  await registerRoutes(app);
  serveStatic(app);
})();

export default app;