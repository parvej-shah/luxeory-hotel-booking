# Luxeory

Luxeory is a modern hotel booking platform that offers users a seamless experience for discovering and reserving hotel rooms. The platform combines interactive design, robust functionality, and secure user authentication to ensure an enjoyable and trustworthy experience.

---

## Live Website
**[Luxeory](https://luxeory-96d49.web.app/)**

---

## Purpose
Luxeory simplifies the hotel booking process while maintaining a luxurious and professional design. The platform caters to users seeking an intuitive and visually pleasing way to find and book hotel accommodations.

---

## Key Features

### Homepage Design
- **Banner:** Features a slider with a heading title, short description, and a button that redirects users to the "Rooms" page.
- **Map Integration:** Displays the hotel’s location using interactive mapping.
- **Featured Rooms:** Highlights top-rated rooms with images, descriptions, and a "Book Now" button redirecting users to detailed room pages.
- **User Reviews:** Displays authentic user reviews sorted by timestamp (latest first).
- **Additional Sections:** Includes extra sections to enhance user engagement.

### User Authentication
- **Login Page:** Email and password-based authentication with a Google login option. Redirects users to the registration page if needed.
- **Register Page:** Allows users to register with email, password, name, and photo URL. Includes password validation with error messages.
- **Authentication Feedback:** Notifications for successful login/registration.

### Navigation Bar
- Links to the "Rooms" page and "My Bookings" page.
- "My Bookings" is accessible only to authenticated users.

### Rooms Page
- Displays all available rooms fetched from the database in a card format in a list view.
- Includes a filter system for price range filtering.
- Clicking a room card redirects users to the room details page.

### Room Details Page
- Shows detailed information about the selected room, including reviews.
- Booking button opens a modal for booking confirmation, room summary, and date selection.
- Ensures users can only book available rooms; booked rooms are marked unavailable.

### My Bookings Page
- Displays a list of rooms booked by the currently logged-in user, including image, name, and price.
- Features include:
  - **Cancel Booking:** Allows users to cancel bookings, making the room available again.
  - **Update Date:** Allows users to modify booking dates with notifications.
  - **Post Reviews:** Users can post reviews for booked rooms, including rating, comment, and timestamp.

### Review System
- Reviews include username, rating (1-5), comment, and timestamp.
- Displayed on the room details page and sorted by the latest timestamp.

### Access Control
- Non-logged-in users can view basic room details but cannot book or post reviews.
- Private routes are protected with authentication.

### Additional Features
- **404 Page:** Custom 404 page with a "Back to Home" button and animated gif.
- **Special Offers:** Pop-up modal showcasing promotions on the homepage.

---

## Technologies & Packages Used

### Frontend
- **React**: Core framework for building the application.
- **Tailwind CSS**: For styling.
- **Framer Motion**: For animations.
- **React-Leaflet**: For map integration.
- **React Helmet**: For updating browser tab title and metadata.
### Additional Packages
```json
{
  "@emotion/react": "^11.14.0",
  "@tanstack/react-query": "^4.36.1",
  "aos": "^2.3.4",
  "axios": "^1.7.9",
  "date-fns": "^4.1.0",
  "firebase": "^11.1.0",
  "lottie-react": "^2.4.0",
  "motion": "^11.15.0",
  "pigeon-maps": "^0.21.6",
  "react-awesome-reveal": "^4.3.1",
  "react-date-picker": "^11.0.0",
  "react-datepicker": "^7.5.0",
  "react-hook-form": "^7.54.2",
  "react-icons": "^5.4.0",
  "react-image-gallery": "^1.3.0",
  "react-modal": "^3.16.3",
  "react-simple-star-rating": "^5.1.7",
  "react-spinners": "^0.15.0",
  "react-stars": "^2.2.5",
  "react-toastify": "^11.0.2",
  "sweetalert2": "^11.15.3",
  "swiper": "^11.1.15"
}
### Backend
- **Node.js**: Backend runtime.
- **Express.js**: For API creation.
- **MongoDB**: Database for storing room and user data.

### Authentication
- **Firebase Authentication**: Secure user login and registration.
- **JSON Web Tokens (JWT)**: Used for private route protection.

---

## Security Measures
- Configuration keys secured using environment variables.
- HTTPS enforced for secure data transmission.
- Access control implemented for protected routes.

---

## Deployment
- **Frontend Deployment:** Hosted on Firebase.
- **Backend Deployment:** Hosted on a vercel.

---

