import { User } from 'prisma/generated/prisma';

export interface UserWithPassword extends User {
  hashingPassword: string;
}

export interface PayLoad {
  sub: string;
  email: string;
  timestamp: Date;
}

export interface JwtPayload {
  sub: string;
  email: string;
  iat?: number;
  exp?: number;
}

export type UserWithPasswordExplicit = User & { hashingPassword: string };
