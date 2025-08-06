


# Healthcare Appointment Booking System

A full-stack healthcare appointment booking application built with React and Node.js, featuring a responsive design and SQLite database.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes with local storage persistence
- **Live Clock**: Real-time clock display in the header
- **Doctor Profiles**: View detailed doctor information and specialties
- **Appointment Booking**: Interactive booking system with time slot selection
- **SQLite Database**: Persistent data storage for doctors and appointments

## Technology Stack

### Frontend
- **React 18**: Modern React with functional components and hooks
- **React Router DOM**: Client-side routing
- **Styled Components**: CSS-in-JS styling solution
- **React Context API**: Global state management for themes
- **React Loader Spinner**: Loading indicators
- **Fetch API**: HTTP client for API calls

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **SQLite3**: Embedded database
- **CORS**: Cross-origin resource sharing


## Project Structure

/healthcare-booking-app
|-- /client # React frontend
| |-- /public
| | |-- /images # Doctor profile images
| |-- /src
| | |-- /components # Reusable UI components
| | |-- /context # React context providers
| | |-- /pages # Page components
| | |-- /theme # Theme configuration
| | |-- App.js
| | |-- index.js
|-- /server # Node.js backend
| |-- database.js # Database configuration and seeding
| |-- server.js # Express server setup
| |-- healthcare.db # SQLite database file
|-- README.md




## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Backend Setup

1. Navigate to the server directory:
cd server

2. Install dependencies:
npm install

3. Start the React development server:
npm start

The application will open at `http://localhost:3000`

## API Endpoints

### GET /api/doctors
Returns all doctors with their details and available slots.

### GET /api/doctors/:id
Returns specific doctor information by ID.

### POST /api/appointments
Creates a new appointment booking.

**Request Body:**
{
"doctorId": 1,
"patientName": "John Doe",
"patientEmail": "john@example.com",
"patientPhone": "9876543210",
"appointmentDate": "2024-03-15",
"appointmentTime": "10:00",
"symptoms": "Chest pain"
}

## Features Details

### Responsive Design
- Mobile-first approach with CSS media queries
- Responsive grid layouts for doctor cards
- Adaptive navigation and form layouts
- Touch-friendly interface elements

### Theme System
- Light and dark theme variants
- Persistent theme selection using localStorage
- Smooth theme transitions throughout the app
- Context-based theme management

### Booking System
- Real-time availability checking
- Interactive time slot selection
- Form validation and error handling
- Success confirmation messages

## Development Guidelines

### React Component Structure
- All components use arrow function syntax
- Functional components with React hooks
- Separate styling files using styled-components
- Context API for global state management

### Styling Conventions
- Styled-components for all CSS
- Pixel-based units (px, vw, vh)
- No animations or transitions
- Consistent color scheme with theme variables