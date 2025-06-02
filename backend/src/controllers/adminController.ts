import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class AdminController {
    async approveRide(req: Request, res: Response) {
        

        // Generate a 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        try {
            const rideId = Number(req.params.id);
            // Update ride status and save OTP
            const ride = await prisma.ride.update({
                where: { id: rideId },
                data: { status: 'approved', otp },
                include: { user: true }, // include user to get mobile number
            });

            // Placeholder for sending OTP via SMS
            // sendSms(ride.user.mobile, `Your ride OTP is: ${otp}`);

            res.json({ message: 'Ride approved and OTP sent to user', ride });
        } catch (error) {
            res.status(500).json({ error: 'Failed to approve ride' });
        }
    }

    async rejectRide(req: Request, res: Response) {
        const { rideId } = req.body;

        try {
            const ride = await prisma.ride.update({
                where: { id: rideId },
                data: { status: 'rejected' },
            });
            res.json(ride);
        } catch (error) {
            res.status(500).json({ error: 'Failed to reject ride' });
        }
    }

    async getRideRequests(req: Request, res: Response) {
        try {
            const rides = await prisma.ride.findMany({
                where: { status: 'pending' },
            });
            res.json(rides);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch ride requests' });
        }
    }
}

export default new AdminController();