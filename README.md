# Peter Alin-Alexandru's Portfolio 
## [alinpeter.my](https://alinpeter.my)
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/AlinAlexandruPeter/portfolio)

This repository contains the source code for my personal portfolio website. It's a modern, single-page application built with React and Vite, designed to showcase my projects, experience, and skills as a developer. The site places a strong emphasis on dynamic animations, custom transitions, and a unique user experience.

## Features

- **Dynamic Page Transitions**: Custom screen transitions for each section, including pixelated, stair, and sliding effects powered by Framer Motion.
- **Interactive Project Gallery**: A unique, rotating 3D carousel to browse through projects, with hover effects and detailed views.
- **Animated UI Elements**: Features such as a staggered-reveal menu, an animated intro sequence, rotating text, and interactive 'text pressure' effects using GSAP and custom hooks.
- **Responsive Design**: A fully responsive layout with a dedicated navigation system for mobile devices.
- **Data-Driven Content**: Project and work experience data are managed in separate JavaScript files for easy updates.
- **Contact Form Integration**: A functional contact form using Formspree to handle email submissions.

## Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animation**: [Framer Motion](https://motion.dev/), [GSAP](https://gsap.com/)
- **Form Handling**: [Formspree](https://formspree.io/)

## Project Structure

The codebase is organized into several key directories:

-   `src/screens`: Contains the main page components (Home, About, Projects, etc.).
-   `src/components`: Houses reusable components, including complex UI elements and shadcn/ui primitives.
-   `src/lib`: Includes utility functions, animation definitions, and project/job data.
-   `src/context`: Manages global state, such as the currently active screen.
-   `src/assets`: Stores static assets like custom fonts and images.

## Running Locally

To run this project on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/AlinAlexandruPeter/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the root of the project. You will need to add your Formspree ID for the contact form to work.

    ```env
    VITE_FORMSPREE_ID=YOUR_FORMSPREE_ID
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173` or the next available port.
