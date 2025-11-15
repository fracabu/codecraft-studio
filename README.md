# CodeCraft Studio - AI Business Automations

CodeCraft Studio is a comprehensive web platform dedicated to showcasing and offering AI-powered business automation solutions. It focuses on integrating artificial intelligence into business processes to significantly reduce operational costs (up to 60%) and boost productivity (up to 40%), offering a clear return on investment through custom tools, process optimization, and strategic AI consulting services.

## Key Features

*   **AI Business Automation Services:** Specializes in designing and implementing AI solutions to automate complex business workflows and reduce operational expenses.
*   **Custom AI Tool Development:** Offers a portfolio of over 15 custom-developed AI tools, including calculators, dashboards, and AI content generators, designed to streamline specific business needs.
*   **Performance & ROI Focused:** Highlights real-world case studies demonstrating significant cost savings and productivity gains, with an average ROI of 4.5x in 90 days.
*   **Progressive Web App (PWA):** Delivers an installable, offline-capable, and app-like experience for enhanced user engagement and accessibility.

## Tech Stack

This project is built with a modern web development stack:

*   **Frontend Framework:** Vue 3
*   **Build Tool:** Vite
*   **State Management:** Pinia
*   **Routing:** Vue Router
*   **Styling:** Tailwind CSS
*   **Backend/Cloud:** Firebase
*   **PWA Capabilities:** Vite PWA Plugin
*   **UI Icons:** Lucide Vue Next
*   **Utilities:** VueUse (Core, Head, Motion)
*   **Testing:** Vitest

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have Node.js and npm (or Yarn/pnpm) installed on your system.

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd codecraft-studio
    ```
2.  Install NPM dependencies:
    ```bash
    npm install
    ```

### Running the Project

1.  **Development (Frontend Only):**
    ```bash
    npm run dev
    ```
    This will start the Vite development server on `http://localhost:3000`.
    Note: Email sending won't work without the backend server.

2.  **Full Development (Frontend + Backend):**
    ```bash
    npm run dev:full
    ```
    This runs both the Vue frontend (port 3000) and Express backend (port 3001) concurrently.
    Use this to test the contact form email functionality locally.

3.  **Build for production:**
    ```bash
    npm run build
    ```
    This command compiles and minifies the application for production deployment into the `dist/` directory.

4.  **Preview the production build:**
    ```bash
    npm run preview
    ```
    This command serves the built application locally for testing the production bundle.

### Other Commands

*   **Run Backend Server Only:**
    ```bash
    npm run server
    ```
    Starts the Express server on port 3001 for email handling.

*   **Run Unit Tests:**
    ```bash
    npm run test:unit
    ```
*   **Lint and Fix Code Issues:**
    ```bash
    npm run lint
    ```
*   **Format Code:**
    ```bash
    npm run format
    ```

## Email Configuration

The contact form sends emails via SMTP. To set up email functionality:

1.  **Copy the environment variables template:**
    ```bash
    cp .env.example .env
    ```

2.  **Configure your SMTP settings in `.env`:**
    ```env
    SMTP_HOST=smtp.aruba.it
    SMTP_PORT=587
    SMTP_SECURE=false
    SMTP_USER=your-email@yourdomain.com
    SMTP_PASS=your-password
    CONTACT_EMAIL=info@codecraft.it
    ```

3.  **For detailed setup instructions**, see [EMAIL_SETUP.md](EMAIL_SETUP.md)

### Deploy to Vercel

1.  Install Vercel CLI: `npm i -g vercel`
2.  Configure environment variables in Vercel Dashboard
3.  Deploy: `vercel --prod`

See [EMAIL_SETUP.md](EMAIL_SETUP.md) for complete deployment instructions.