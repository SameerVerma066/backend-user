import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UserController {
    async signUp(req: Request, res: Response) {
        const { name, mobile, email } = req.body;

        try {
            const user = await prisma.user.create({
                data: {
                    name,
                    mobile: mobile, // changed to match schema
                    email,
                },
            });
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ error: 'User sign-up failed' });
        }
    }

    async bookRide(req: Request, res: Response) {
        const { destination, startingPoint, trackingId, userId } = req.body;

        try {
            const ride = await prisma.ride.create({
                data: {
                    destination,
                    startingPoint,
                    trackingId,
                    userId,
                },
            });
            res.status(201).json(ride);
        } catch (error) {
            res.status(500).json({ error: 'Ride booking failed' });
        }
    }
}

export default new UserController();