## 🏠 NESTEASE - A Full Stack Home Rentals Application

<img src="https://github.com/viszec/nestease/assets/39253875/b36db54c-0784-4a82-b5f7-1582dd602aab" alt="logo" width="200"/>

Welcome to the Full Stack Home Rentals Application!
This project guides you through building a full-stack application similar to Airbnb using React, Redux, Node.js, MongoDB, JWT, and Material UI. This application covers user registration, login, and property listing functionalities, demonstrating advanced coding techniques for your portfolio.

![nestease profile](https://github.com/viszec/nestease/assets/39253875/e7264e17-7f8e-49a1-9b5c-2e70408efe51)


### Table of Contents
- [🏠 NESTEASE - A Full Stack Home Rentals Application](#-nestease---a-full-stack-home-rentals-application)
  - [Table of Contents](#table-of-contents)
  - [Key Features](#key-features)
  - [Demo](#demo)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies Used](#technologies-used)
  - [Project Structure](#project-structure)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

### Key Features
- [Authentication: Sign up & Log in with Auth, JWT, Bcrypt.](#usage)
- [Property Listings: Create new listings with detailed information.](#usage)
- [Options Management: Select & Unselect options.](#usage)
- [Photo Management: Upload, delete, drag & drop photos.](#usage)
- [Bookings: Create bookings with an interactive calendar.](#usage)
- [Property Feed: Fetch property feed by category.](#usage)
- [Search Functionality: Search for properties by keyword.](#usage)
- [Wishlist: Add & Remove wishlist item(s).](#usage)
- [Photo Storage: Upload photos from local & store in MongoDB.](#usage)
- [Schema Management: Mongoose schema for data modeling.](#usage)
- [State Management: Redux state management.](#usage)
- [Styling: Sass (scss) and Material UI for styling.](#usage)
  
### Demo
[Live Demo](https://viszec.github.io/nestease/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/homerentals.git
   cd [project name]

2. Install server dependencies:
   ```bash
   cd server
   npm install

3. Install client dependencies:
   ```bash
   cd ../client
   npm install

4. Create a .env file in the server directory and add the following:
   ```bash
   MONGO_URI=your_mongo_db_uri
   JWT_SECRET=your_jwt_secret

5. Start the development server:
   ```bash
   // In the server directory
   npm run dev

6. Start the client server:
   ```bash
   // In the client directory
   npm start
   
7. Add packages on client
   ```bash
   // These packages collectively help you manage routing, styles, UI components, and icons in your React application, providing a comprehensive set of tools to build modern web applications.
   npm i react-router-dom sass @mui/material @mui/icons-material @emotion/react @emotion/styled

8. Add packages on server
   ```bash
   // These packages collectively help you manage the state of your React application using Redux, simplifying state management with the Redux Toolkit and ensuring the state is persisted across sessions with redux-persist.

   npm i react-redux @reduxjs/toolkit redux-persist

    "scripts": {
    "start": "nodemon index.js"
   }, // Modify the package.json file in the server to start the server

### Usage

Sign up: Register a new user account.
Log in: Authenticate using JWT.
Create a listing: Add a new property with detailed information.
Manage options: Select and unselect various options for listings.
Photo management: Drag, drop, upload, and delete photos.
Booking: Use the calendar to create and manage bookings.
Search: Look up properties by category or keyword.
Wishlist: Add or remove properties from the wishlist.

### Technologies Used

1. Frontend: React JS, Redux, Material UI, Sass (scss)
2. Backend: Node.js, Express.js, MongoDB, Mongoose
3. Authentication: JWT, Bcrypt
4. State Management: Redux
5. Styling: Material UI, Sass (scss)

### Project Structure
![image](https://github.com/viszec/nestease/assets/39253875/2df65fb8-3125-4c70-809c-ad84bbbf351d)


### Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any enhancements, bug fixes, or improvements.
1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

### License
Distributed under the MIT License. See LICENSE for more information.

### Contact
- Mavis M. imavisma@gmail.com
- Project Link: [https://github.com/viszec/nestese.git](https://github.com/viszec/nestease.git)

