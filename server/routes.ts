import type { Express } from "express";
import { createServer } from "http";
import { insertNewsletterSchema, insertContactSchema } from "@shared/schema";
import { storage } from "./storage";

export async function registerRoutes(app: Express) {
  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const data = insertNewsletterSchema.parse(req.body);
      const newsletter = await storage.createNewsletter(data);
      res.json(newsletter);
    } catch (error) {
      res.status(400).json({ error: "Invalid newsletter data" });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(data);
      res.json(contact);
    } catch (error) {
      res.status(400).json({ error: "Invalid contact data" });
    }
  });

  // Get portfolio items
  app.get("/api/portfolio", async (_req, res) => {
    try {
      const items = await storage.getPortfolioItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch portfolio items" });
    }
  });

  // Get single portfolio item
  app.get("/api/portfolio/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const item = await storage.getPortfolioItem(id);
      if (!item) {
        res.status(404).json({ error: "Portfolio item not found" });
        return;
      }
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch portfolio item" });
    }
  });

  return createServer(app);
}
