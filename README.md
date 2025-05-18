This is a full-stack e-commerce web application inspired by Hepsiburada. It consists of a React.js frontend and an Express.js backend using SQLite as the database.

⚠️ Note: Since both the backend and frontend are deployed together on Render, the first load may take 15–20 seconds due to cold starts. Please allow some time for the server to wake up.


### Screenshots

<img src="https://github.com/iremdemir70/se3355-assignmet/blob/main/client/screenshots/Screenshot4.png?raw=true" width="500"/>
<img src="https://github.com/iremdemir70/se3355-assignmet/blob/main/client/screenshots/Screenshot3.png?raw=true" width="500"/>
<img src="https://github.com/iremdemir70/se3355-assignmet/blob/main/client/screenshots/Screenshot5.png?raw=true" width="500"/>
<img src="https://github.com/iremdemir70/se3355-assignmet/blob/main/client/screenshots/Screenshot2.png?raw=true" width="500"/>
<img src="https://github.com/iremdemir70/se3355-assignmet/blob/main/client/screenshots/Screenshot1.png?raw=true" width="500"/>


## Technologies Used

- **Frontend:**
- React.js
- React Router DOM
- Redux Toolkit
- Axios
- Bootstrap 5
- Slick Carousel
- FontAwesome
- **Backend:** 
- Node.js + Express.js
- SQLite (via better-sqlite3)
- RESTful API architecture

## Project Structure

```
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
```

## Features

- **Campaigns:** Grid display of current campaigns.
- **Slider:** Main slider for featured content.
- **Electronics:** Carousel for electronic products.
- **Recommendations:** Personalized product suggestions.
- **Last Visited Products:** Tracks and displays recently viewed products using Redux and localStorage.
- **Responsive Design:** Mobile-friendly layout.


## API Endpoints
```

| GET        | `/api/quick-links`       | Fetch quick link banner data             |
| GET        | `/api/slider`            | Retrieve main slider data                |
| GET        | `/api/elektronik`        | Fetch electronic product listings        |
| GET        | `/api/recommendations`   | Get personalized recommendation data     |

```
Each endpoint returns structured JSON data from the SQLite database.

---

## **Backend Overview**

- **`db.js`**: Initializes the database and inserts default data into tables (`quick_links`, `slider_items`, `elektronik_items`, `recommendations`) if they are empty.
- **`routes.js`**: Handles API logic and sends data to the frontend.
- **`index.js`**: Starts the Express server, serves the React app from `client/build`, and handles routing.

### **Starting the Server Locally**

   ```bash
- cd server
- npm install
- node index.js
   ```

## **Frontend Overview**

**Main Components:**

- Navbar: Top navigation menu with category dropdowns
- MainSlider: Displays homepage carousel with images
- QuickLinks: Showcases promotional banners
- ElectronicSlider: Carousel for electronic product deals
- Recommendations: Personalized product suggestions (Slick carousel)
- VisitedProducts: Displays products visited by the user (from Redux)
- ProductPage: Static product detail page based on URL parameter

**Redux Store:**

- visitedProductsSlice: Manages the state of viewed products.
- Products visited are stored in global state and shown in VisitedProducts.

### **Running the Frontend:**

   ```bash
- cd frontend
- npm install
- npm start
   ```
App will run on http://localhost:3000 (proxying to backend at http://localhost:5050 during development).


### Deployment Notes

Deployed on Render with a single backend handling both API and static frontend.
React build files are served from Express (client/build).
Cold starts on Render may cause a delay on first load (approx. 15–20s).
