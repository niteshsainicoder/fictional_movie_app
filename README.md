# Movie Ticket Booking Web App

## 📌 Project Overview
This is a **movie ticket booking web application** built using **Next.js** and deployed on **Vercel/Netlify**. The app allows users to log in, browse movies, book tickets, and view their booking history.

## ✨ Features
- **User Authentication**: Login using a hardcoded username and password.
- **Movie Listing & Search**: View and filter a list of movies.
- **Ticket Booking**: Select tickets, date, and time for a movie.
- **Booking History**: Track all past ticket purchases.
- **State Persistence**: Data is retained even after a page refresh using `localStorage`.
- **Smooth UI/UX**: Implemented using Tailwind CSS for a pixel-perfect design based on the Figma mock-up.
- **Animations & Notifications**: Uses libraries for loaders and toasts.

## 🖥️ Screens
### 1️⃣ **Login Screen**
- Users log in with **hardcoded credentials**:
  ```json
  {
    "username": "naval.ravikant",
    "password": "05111974"
  }
  ```
- Incorrect credentials show an error message.
- Successful login redirects to the **Booking** page.

### 2️⃣ **Booking Screen**
- Displays a list of movies (name, year, image, etc.).
- Includes a **real-time search bar** to filter movies.
- Clicking on a movie routes to the **Selection** page.

### 3️⃣ **Selection Screen**
- Users select:
  - **Ticket Count** (Default: `1`)
  - **Date** (Default: `current date`)
  - **Time** (Default: `12:00`)
- Clicking **"Book Ticket"**:
  - Saves the booking to the **Activity Screen**.
  - Shows a **loading animation** & a **toast message**.
  - Redirects to the **Activity Screen** after booking.

### 4️⃣ **Activity Screen**
- Displays a list of booked tickets with:
  - Movie Name
  - Ticket Count
  - Booking Date & Time
  - Total Amount (`$25 × ticket-count`)

## 🚀 Tech Stack
- **Framework**: Next.js (React.js)
- **State Management**: React Context API + `localStorage`
- **Styling**: Tailwind CSS
- **Deployment**: Vercel/Netlify
- **Animations & Toasters**: External libraries (e.g., React Toastify, React Spinners)

## 📦 Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/niteshsainicoder/fictional_movie-app.git
   ```
2. Navigate into the project:
   ```sh
   cd movie-booking-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Open in browser:
   ```
   http://localhost:3000
   ```

## 🌐 Deployment
- The project is deployed on **Vercel/Netlify**.
- [Live Demo](https://your-deployed-link.vercel.app)

## 📩 Submission
- Submit the **deployed link** and **GitHub repo link** via email.
- You can request an **extension of 1-2 days** if needed.

## 📞 Support & Contact
For clarifications or guidance, reach out to **Ayush Soni**:
- 📧 Email: ayush.soni@neobuild.tech
- 📞 Phone: +91 9307576314

