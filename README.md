# Standalone Web Application

This is a fully self-contained Astro project containing the standalone pages for Customer Experience, FinOps, Governance, and the shared Platform page.

## Getting Started

To run this project locally on your machine, follow these simple steps:

### 1. Install Dependencies
Make sure you have Node.js installed on your computer. Open your terminal in this folder and run:
```bash
npm install
```

### 2. Start the Development Server
Once the installation finishes, start the local development server by running:
```bash
npm run dev
```

### 3. View the Site
Open your browser and navigate to the Local URL provided in your terminal (usually `http://localhost:4321`). 
By default, the homepage will redirect you directly to the Customer Experience page.

## Pages Included
- `/customer-experience`
- `/finops`
- `/governance`
- `/platform`

## Deployment
This project is pre-configured for deployment to Cloudflare Pages. 
It includes a `functions/[[path]].js` file that automatically routes custom domains (like `finops-app.com`) to their specific pages.
