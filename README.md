# Ride Booking Application

This is a ride booking application that allows users to book rides, drivers to manage their assigned rides, and admins to oversee the ride requests.

## Project Structure

The project is divided into two main parts: the backend and the frontend.

### Backend

The backend is built using TypeScript and Express, and it interacts with a PostgreSQL database using Prisma ORM. The structure is as follows:

- **src**: Contains the source code for the backend.
  - **controllers**: Contains the logic for handling requests.
    - `adminController.ts`: Handles admin-related operations.
    - `driverController.ts`: Manages driver-related functionalities.
    - `userController.ts`: Manages user sign-up and ride bookings.
  - **routes**: Defines the API routes.
    - `adminRoutes.ts`: Routes for admin operations.
    - `driverRoutes.ts`: Routes for driver operations.
    - `userRoutes.ts`: Routes for user operations.
  - **prisma**: Contains the Prisma client for database interactions.
    - `client.ts`: Initializes the Prisma client.
  - **models**: Contains database models.
    - `index.ts`: Exports the models used with Prisma.
  - **types**: Contains TypeScript interfaces for request and response types.
    - `index.ts`: Exports the types used in the application.
  - `app.ts`: Entry point of the backend application.

- **prisma**: Contains the Prisma schema.
  - `schema.prisma`: Defines the database schema, including models for User, Ride, and Admin.

- `package.json`: Lists dependencies and scripts for the backend project.
- `tsconfig.json`: TypeScript configuration file for the backend.

### Frontend

The frontend is built using React with TypeScript. The structure is as follows:

- **src**: Contains the source code for the frontend.
  - **components**: Contains reusable components.
    - `AdminPanel.tsx`: Component for admin functionalities.
    - `DriverPanel.tsx`: Component for driver functionalities.
    - `UserPanel.tsx`: Component for user functionalities.
  - **pages**: Contains the main pages of the application.
    - `AdminPage.tsx`: Renders the AdminPanel.
    - `DriverPage.tsx`: Renders the DriverPanel.
    - `UserPage.tsx`: Renders the UserPanel.
  - `App.tsx`: Main entry point for the frontend application.

- `types`: Contains TypeScript interfaces for types used in the frontend.
  - `index.ts`: Exports the types used in the frontend application.

- `package.json`: Lists dependencies and scripts for the frontend project.
- `tsconfig.json`: TypeScript configuration file for the frontend.

## Features

- User sign-up with name, mobile number, and email.
- Ride booking with destination, starting point, and tracking ID.
- Admin panel for managing ride requests.
- Driver panel for viewing and managing assigned rides.

## Getting Started

To get started with the project, clone the repository and install the dependencies for both the backend and frontend:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```

3. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```

4. Set up the database using Prisma:
   ```
   cd ../backend
   npx prisma migrate dev
   ```

5. Start the backend server:
   ```
   npm run start
   ```

6. Start the frontend application:
   ```
   cd ../frontend
   npm start
   ```

## License

This project is licensed under the MIT License.