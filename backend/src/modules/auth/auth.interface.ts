import { User } from "prisma/generated/prisma";

export interface UserWithPassword extends User {
	// This interface includes all User fields including hashingPassword
	// No additional properties needed as User already contains the password field
}

// Alternative: If you want to be more explicit about the password field
export interface UserWithPasswordExplicit extends User {
	hashingPassword: string; // Explicitly showing the password field
}

export interface PayLoad {
	sub: string,
	email: string,
	timestamp: Date
}