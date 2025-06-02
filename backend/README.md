# Ride Booking Application Backend

This is the backend for the Ride Booking Application, built using TypeScript, Express, and Prisma ORM with PostgreSQL as the database.

## Project Structure

- **src/**: Contains the source code for the backend application.
  - **controllers/**: Contains the controller files for handling business logic.
    - `adminController.ts`: Handles admin-related operations.
    - `driverController.ts`: Handles driver-related operations.
    - `userController.ts`: Handles user-related operations.
  - **routes/**: Contains route definitions that map HTTP requests to controller methods.
    - `adminRoutes.ts`: Defines routes for admin operations.
    - `driverRoutes.ts`: Defines routes for driver operations.
    - `userRoutes.ts`: Defines routes for user operations.
  - **prisma/**: Contains the Prisma client initialization.
    - `client.ts`: Initializes the Prisma client for database interactions.
  - **models/**: Contains database models used with Prisma.
    - `index.ts`: Exports the database models.
  - `app.ts`: Entry point of the application, initializes the Express app and sets up middleware and routes.
  - **types/**: Contains TypeScript interfaces for request and response types.
    - `index.ts`: Exports TypeScript interfaces.

## Database

The application uses PostgreSQL as the database, and the schema is defined in the `prisma/schema.prisma` file. The models include:

- **User**: Represents a user in the system.
- **Ride**: Represents a ride booking.
- **Admin**: Represents an admin user.

## Setup

1. Clone the repository.
2. Navigate to the `backend` directory.
3. Install dependencies:

   npm install

4. Set up the PostgreSQL database and update the connection string in the `.env` file.
5. Run the Prisma migrations:

   npx prisma migrate dev

6. Start the server:

   npm run start

## API Endpoints

- **User**
  - `POST /api/users/signup`: Sign up a new user with name, mobile number, and email.
  - `POST /api/users/book`: Book a ride with destination, starting point, and tracking ID.

- **Admin**
  - `GET /api/admin/rides`: Get all ride requests.
  - `POST /api/admin/approve`: Approve a ride request.

- **Driver**
  - `GET /api/drivers/rides`: Get assigned rides for the driver.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Test Cases
1. User Signup
POST http://localhost:5000/api/users/signup
Body (JSON):

2. User Book Ride
POST http://localhost:5000/api/users/book-ride
Body (JSON):

(Replace userId with the actual user ID from signup response.)

3. Admin Get Pending Ride Requests
GET http://localhost:5000/api/admin/ride-requests

4. Admin Approve Ride (OTP will be generated and sent)
POST http://localhost:5000/api/admin/approve-ride/1
(Replace 1 with the actual ride ID)

5. Admin Reject Ride
POST http://localhost:5000/api/admin/reject-ride/1
(Replace 1 with the actual ride ID)

6. Driver Get Assigned Rides
GET http://localhost:5000/api/drivers/rides?driverId=1
(Replace 1 with the actual driver ID)

7. Driver Update Ride Status
PUT http://localhost:5000/api/drivers/rides/1/status
Body (JSON):

(Replace 1 with the actual ride ID)

8. (Optional) Driver Start Ride with OTP
If you have an endpoint for OTP verification, for example:
POST http://localhost:5000/api/drivers/rides/1/start
Body (JSON):

(Replace 1 and otp with actual values)



## License

This project is licensed under the MIT License.