import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import adminRoutes from './routes/adminRoutes';
import driverRoutes from './routes/driverRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/drivers', driverRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});