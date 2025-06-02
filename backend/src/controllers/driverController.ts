import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class DriverController {
  async getAssignedRides(req: Request, res: Response) {
    const driverId = Number(req.params.driverId); // parse to number
    try {
      const rides = await prisma.ride.findMany({
        where: { driverId: driverId },
      });
      res.json(rides);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch rides" });
    }
  }

  async updateRideStatus(req: Request, res: Response) {
    
    try {
      const rideId = Number(req.params.id); // Ensure it's a number
      const { status } = req.body;
      const updatedRide = await prisma.ride.update({
        where: { id: rideId },
        data: { status: status },
      });
      res.json(updatedRide);
    } catch (error) {
      res.status(500).json({ error: "Failed to update ride status" });
    }
  }
}

export default new DriverController();
