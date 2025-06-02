export interface UserSignUpRequest {
    name: string;
    mobileNumber: string;
    email: string;
}

export interface RideBookingRequest {
    destination: string;
    startingPoint: string;
    trackingId: string;
}

export interface UserResponse {
    id: number;
    name: string;
    mobileNumber: string;
    email: string;
}

export interface RideResponse {
    id: number;
    userId: number;
    destination: string;
    startingPoint: string;
    trackingId: string;
    createdAt: Date;
    updatedAt: Date;
}