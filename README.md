# Ragam Elyssia - Ultra-Luxury Event Planning

This is the repository for Ragam Elyssia, an elite event planning and concierge service. The website is built with React, TypeScript, and Express, with Stripe integration for secure payments.

## Deployment to Vercel

### Prerequisites

1. A Vercel account
2. Git repository with this code
3. Stripe API Keys (secret and public)

### Steps to Deploy

1. Push this repository to GitHub, GitLab, or Bitbucket
2. Connect to Vercel:
   - Go to [Vercel](https://vercel.com) and sign in
   - Click "Add New" > "Project"
   - Import the Git repository
   - Configure the project:
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Install Command: `npm install`

3. Environment Variables:
   Add the following environment variables in the Vercel dashboard:
   - `STRIPE_SECRET_KEY`: Your Stripe secret key
   - `VITE_STRIPE_PUBLIC_KEY`: Your Stripe publishable key
   - `SESSION_SECRET`: A random string for session encryption

4. Deploy:
   - Click "Deploy"
   - Vercel will build and deploy your application

### After Deployment

- You can add a custom domain in the Vercel dashboard
- Setup redirects and rewrites if needed
- Monitor deployment logs for any issues

## Local Development

1. Clone the repository
2. Run `npm install`
3. Create a `.env` file with the necessary environment variables
4. Run `npm run dev` to start the development server

## Technologies Used

- Frontend: React, TypeScript, TailwindCSS, Shadcn UI
- Backend: Express, Node.js
- Payments: Stripe
- Deployment: Vercel

## Contact

For any queries, contact Ragam Elyssia at +91 9632069662 or visit our office in Bangalore.