# Netflix Clone Project

This project is a high-fidelity Netflix clone developed using React 19 and Firebase 12. It pulls real-time movie data from the TMDB API and provides a fully functional user authentication system.
[Netflix Clone | Live Demo]([https://example.com](https://subtle-centaur-4ff0ea.netlify.app/)

## Project Overview

The application is built to demonstrate modern frontend development practices, focusing on performance, responsive design, and integration with third-party APIs. It includes a landing page with dynamic movie categories, a secure login/registration system, and a dedicated trailer player.
![Example Image](preview.png)

## Built With

* React 19: The latest version for efficient UI rendering and component management.
* Firebase 12: Handles Secure User Authentication and Firestore database management.
* React Router 7: Manages application navigation and dynamic route parameters.
* TMDB API: Provides movie metadata, posters, and YouTube video keys.
* React Toastify: Provides user feedback for authentication errors and actions.
* Vanilla CSS: High-performance styling using Flexbox, CSS Grid, and custom animations.

## Key Features

* Authentication: Users can sign up and log in using Firebase. Authentication state is persistent across sessions.
* Dynamic Navigation: The Navbar changes transparency based on scroll position to mimic the original Netflix experience.
* Movie Carousels: Infinite horizontal scrolling categories fetch data dynamically (Top Rated, Popular, Upcoming, and Now Playing).
* Interactive Slider: Supports mouse-wheel horizontal scrolling on category rows.
* Video Integration: Movie cards link to a player page that automatically fetches and embeds the official YouTube trailer via iframe.
* Responsiveness: Deeply integrated media queries ensure compatibility across desktop, tablet, and mobile browsers.

## Installation and Setup

1. Clone the repository to your local machine.
2. Navigate to the project folder and install dependencies:
   npm install

3. Setup Environment Variables:
   Create a .env file in the root directory. You will need to provide your own keys for the following services:
   
   VITE_FIREBASE_API_KEY=your_key
   VITE_FIREBASE_AUTH_DOMAIN=your_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_TMDB_API_TOKEN=your_bearer_token

4. Start the development server:
   npm run dev

## Application Structure

* /src/assets: Social icons, brand logos, and fallback banners.
* /src/components: Reusable UI elements like the Navbar, Footer, and TitleCards.
* /src/pages:
    - Home: The main view containing the hero section and category rows.
    - Login: The unified sign-in/sign-up form with validation logic.
    - Player: The dynamic YouTube player page.
* /src/firebase.js: Centralized configuration and helper functions for Auth and Firestore.

## Data Source

Movie metadata, images, and video keys are provided by The Movie Database (TMDB). This project is for educational purposes only and is not affiliated with Netflix.

## Security Disclaimer

The current build requires restricted API keys for TMDB and Firebase. In a production environment, never hardcode these keys directly into your source files. Use environment variables and restrict your API origins within the Google Cloud Console and TMDB dashboard.

## License

This project is open-source and available under the MIT License.
