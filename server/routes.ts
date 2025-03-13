import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import Stripe from "stripe";

// Debugging: Log the Stripe secret key
console.log("Stripe Secret Key:", process.env.STRIPE_SECRET_KEY);

// Validate Stripe secret key
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing required Stripe secret: STRIPE_SECRET_KEY");
}

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-08-16", // Use a valid Stripe API version
});

export async function registerRoutes(app: Express): Promise<Server> {
  console.log("Setting up routes...");

  // Set up authentication routes
  setupAuth(app);

  // API route to create a PaymentIntent
  app.post("/api/create-payment-intent", async (req, res) => {
    try {
      const { amount } = req.body;

      // Validate the amount
      if (typeof amount !== "number" || amount <= 0) {
        return res.status(400).json({
          message: "Invalid amount. Amount must be a positive number.",
        });
      }

      // Create a PaymentIntent
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
      });

      // Return the client secret
      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
      console.error("Error creating payment intent:", error);
      res.status(500).json({
        message: "Error creating payment intent: " + error.message,
      });
    }
  });

  // API route to handle bookings
  app.post("/api/bookings", async (req, res) => {
    try {
      const { paymentIntentId, ...bookingData } = req.body;

      // Validate the paymentIntentId
      if (!paymentIntentId) {
        return res.status(400).json({
          success: false,
          message: "Payment intent ID is required.",
        });
      }

      // Verify the payment was successful
      const paymentIntent =
        await stripe.paymentIntents.retrieve(paymentIntentId);

      if (paymentIntent.status !== "succeeded") {
        return res.status(400).json({
          success: false,
          message: "Payment not completed.",
        });
      }

      // Store the booking (mock implementation)
      // In a real application, this would be stored in a database
      console.log("Booking data:", bookingData);

      res.status(200).json({
        success: true,
        message: "Booking confirmed and payment processed successfully.",
      });
    } catch (error: any) {
      console.error("Error processing booking:", error);
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  });

  // Mock API routes for contact, brochure, and newsletter
  app.post("/api/contact", (req, res) => {
    res.status(200).json({
      success: true,
      message: "Contact message received.",
    });
  });

  app.get("/api/brochure", (req, res) => {
    res.status(200).json({
      success: true,
      message: "Brochure download link.",
      url: "/brochure.pdf",
    });
  });

  app.post("/api/newsletter", (req, res) => {
    res.status(200).json({
      success: true,
      message: "Newsletter subscription successful.",
    });
  });

  // Create and return the HTTP server
  const httpServer = createServer(app);
  return httpServer;
}
