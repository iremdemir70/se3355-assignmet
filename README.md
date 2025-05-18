This is a full-stack e-commerce web application inspired by Hepsiburada. It consists of a React.js frontend and an Express.js backend using SQLite as the database.

⚠️ Note: Since both the backend and frontend are deployed together on Render, the first load may take 15–20 seconds due to cold starts. Please allow some time for the server to wake up.

### Screenshot

![App Preview](./screenshots/Screenshot 2025-05-18 at 18.02.24.png)


Project Structure

.
├── client/                 # Frontend (React)
│   ├── public/             # Images
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── redux/          # Redux store and slices
│   │   ├── App.js
│   │   ├── index.js
│   │   └── stylesheets
│   └── package.json        # Frontend dependencies and scripts
│
├── server/                 # Backend (Express.js)
│   ├── data.sqlite         # SQLite database file
│   ├── db.js               # DB connection & seed data
│   ├── index.js            # Main server entry point
│   ├── routes.js           # API route definitions
│   └── package.json        # Backend dependencies


Technologies Used

Frontend:
React.js
React Router DOM
Redux Toolkit
Axios
Bootstrap 5
Slick Carousel
FontAwesome
Backend:
Node.js + Express.js
SQLite (via better-sqlite3)
RESTful API architecture

API Endpoints:

Method	Route	Description
GET	    /api/quick-links	    Fetch quick link banner data
GET	    /api/slider	            Retrieve main slider data
GET	    /api/elektronik	        Fetch electronic product listings
GET	    /api/recommendations	Get personalized recommendation data

Each endpoint returns structured JSON data from the SQLite database.

Backend Overview

db.js: Initializes the database and inserts default data into tables (quick_links, slider_items, elektronik_items, recommendations) if they are empty.
routes.js: Handles API logic and sends data to the frontend.
index.js: Starts the Express server, serves the React app from client/build, and handles routing.

Starting the Server Locally

cd server
npm install
node index.js

Server runs by default on http://localhost:5050.

Frontend Overview

Main Components:
Component:	        Functionality:
Navbar	            Top navigation menu with category dropdowns
MainSlider	        Displays homepage carousel with images
QuickLinks	        Showcases promotional banners
ElectronicSlider	Carousel for electronic product deals
Recommendations	    Personalized product suggestions (Slick carousel)
VisitedProducts	    Displays products visited by the user (from Redux)
ProductPage	        Static product detail page based on URL parameter


Redux Store:

visitedProductsSlice: Manages the state of viewed products.
Products visited are stored in global state and shown in VisitedProducts.

Running the Frontend:

cd client
npm install
npm start

App will run on http://localhost:3000 (proxying to backend at http://localhost:5050 during development).

Deployment Notes

Deployed on Render with a single backend handling both API and static frontend.
React build files are served from Express (client/build).
Cold starts on Render may cause a delay on first load (approx. 15–20s).
