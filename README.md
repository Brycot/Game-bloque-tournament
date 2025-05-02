# Bloque | Galactic-Fishing Game UI

<img src="./public/bloque_icon.svg" alt="Bloque Icon" width="50"/>

Frontend to visualize the leaderboard, market, and legend for Bloque's "Galactic Fishing" game. Built with React, Vite, TypeScript, and Tailwind CSS.

[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Built with Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Styled with Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Written in TypeScript](https://img.shields.io/badge/Written%20in-TypeScript-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Data Fetching with SWR](https://img.shields.io/badge/Data%20Fetching-SWR-black?style=for-the-badge&logo=swr)](https://swr.vercel.app/)

<!-- Optional: Add an application screenshot here -->
<!-- ![Application Screenshot](path/to/screenshot.png) -->

## ✨ Key Features

*   **Dynamic Leaderboard:** Displays player rankings with periodically updated data.
    *   Sorting by Rank, Level, XP, and Gold (ascending/descending).
    *   Pagination for easy navigation.
    *   Filtering of specific users (configured in `useLeaderboardSort.ts`).
    *   Visual highlighting for the player with the most gold and infected players.
*   **Market Display:** Lists available items in the game market with their details and costs.
*   **Game Legend:** Shows the explanation of different tiers and emoji representations used in the game.
*   **Light/Dark Theme:** Theme toggle that persists user preference in `localStorage`.
*   **Progressive Web App (PWA):**
    *   Installable on mobile and desktop devices.
    *   Offline caching for Leaderboard and Market data (`NetworkFirst` strategy) for a better offline or slow network experience.
*   **Responsive Interface:** Adapted to different screen sizes using Tailwind CSS.
*   **Automatic Data Refreshing:** Uses SWR to revalidate data at regular intervals, on window focus, or upon reconnecting.

## 🛠️ Technologies Used

*   **Framework:** React 19
*   **Build Tool:** Vite
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS v4 (with `@theme` configuration and custom variants)
*   **Data Fetching:** SWR (Stale-While-Revalidate)
*   **Components:** Functional with Hooks
*   **Utilities:** `clsx` (for conditional classes)
*   **Linting:** ESLint + TypeScript ESLint

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm (or pnpm/yarn)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd game-bloque
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure environment variables:**
    Create a `.env` file in the project root and add your API URL:
    ```.env
    VITE_API_URL=https://your-api-endpoint.com/api
    ```
    *Note: Replace `https://your-api-endpoint.com/api` with the actual game API URL.*

### Running the Project

1.  **Development Mode:**
    Starts the development server with HMR (Hot Module Replacement).
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or the port indicated by Vite).

2.  **Production Build:**
    Compiles and minifies the application for production.
    ```bash
    npm run build
    ```
    The resulting files will be in the `dist/` folder.

3.  **Production Preview:**
    Runs the production build locally.
    ```bash
    npm run preview
    ```

4.  **Linting:**
    Runs ESLint to check the code style and potential errors.
    ```bash
    npm run lint
    ```

## 📁 Project Structure (Simplified)

```
game-bloque/
├── public/               # Static files (icons, etc.)
├── src/
│   ├── components/       # Reusable React components
│   │   ├── layout/       # Layout structure components (Layout)
│   │   ├── sections/     # Components grouping logic (Leaderboard, Market, Legend)
│   │   ├── LeaderboardTable.tsx
│   │   ├── LegendDisplay.tsx
│   │   ├── MarketList.tsx
│   │   └── ThemeToggle.tsx
│   ├── dto/              # Data Transfer Objects (TypeScript Interfaces for API)
│   ├── hooks/            # Custom Hooks (fetching and state logic)
│   ├── App.css           # Global styles and Tailwind Theme configuration
│   ├── App.tsx           # Main application component
│   ├── index.css         # Base styles
│   ├── main.tsx          # React application entry point
│   └── vite-env.d.ts     # Type definitions for Vite environment variables
├── .env.example          # Example environment variables file (Optional but recommended)
├── .eslintrc.cjs         # ESLint configuration
├── index.html            # Main HTML template
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration (implicit via @tailwindcss/vite)
├── tsconfig.json         # Base TypeScript configuration
├── tsconfig.app.json     # TypeScript configuration for the application
├── tsconfig.node.json    # TypeScript configuration for the Node environment (Vite config, etc.)
└── vite.config.ts        # Vite configuration (plugins, PWA, etc.)
```

## ⚙️ PWA Configuration

The PWA configuration is managed via `vite-plugin-pwa` in `vite.config.ts`. It includes:

*   **Auto Update Registration:** The Service Worker updates automatically.
*   **Manifest:** Defines the PWA's name, icons, colors, and behavior.
*   **Caching:**
    *   Assets (`js`, `css`, `html`, `svg`) are cached using the `precache` strategy.
    *   The API routes `/game/leaderboard` and `/game/market` use a `NetworkFirst` strategy: it tries to fetch fresh data from the network but falls back to the cache if the network fails or takes too long (4-second timeout). The cache expires after 1 hour.

---

*Coded with 💙 by Brycot for Bloque.*