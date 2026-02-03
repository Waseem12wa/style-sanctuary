# Style Sanctuary - Modern E-Commerce Platform

A production-ready, full-stack e-commerce solution built for Digital Marketing and Brand Development.
This project features a modern React frontend with a conversion-focused design and a Node/Express backend for robust data handling.

## Features

### Brand & Marketing
- **Modern Aesthetic**: "Dark Athletic" visually engaging design with glassmorphism effects.
- **Conversion Optimization**: High-contrast CTAs, Trust Badges, and simplified Checkout.
- **Content Marketing**: Integrated Blog and Newsletter subscription with hooks.
- **SEO Ready**: Optimized meta tags and Open Graph data for social sharing.

### Core Functionality
- **Product Management**: Dynamic shop with category filtering and price ranges.
- **Cart System**: Fully functional cart with quantity management.
- **Checkout Process**: Multi-step checkout flow (Shipping -> Payment -> Success).
- **User Dashboard**: Protected area for order history and profile management.

### Authentication
- Secure Signup & Login (JWT).
- Email Verification flow.
- Forgot Password flow.

## Tech Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS, Framer Motion, Shadcn UI.
- **Backend**: Node.js, Express, JWT, Bcrypt.
- **Data**: JSON-based local persistence (Simulated Database for portability).

## Getting Started

### Prerequisites
- Node.js installed.

### Installation

1.  **Install Frontend Dependencies**:
    ```bash
    npm install
    ```

2.  **Install Backend Dependencies**:
    ```bash
    cd backend
    npm install
    cd ..
    ```

### Running the App

You need to run both the Client and Server.

1.  **Start Backend**:
    ```bash
    cd backend
    npm start
    ```
    (Runs on Port 5000)

2.  **Start Frontend**:
    ```bash
    npm run dev
    ```
    (Runs on Port 8080)

## Project Structure

- `/src`: Frontend Source Code
  - `/pages`: Application Routes (Home, Shop, Auth, etc.)
  - `/components`: Reusable UI components.
- `/backend`: Backend Source Code
  - `/routes`: API Endpoints for Auth and Products.
  - `/data`: JSON data files for persistence.
