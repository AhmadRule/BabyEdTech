import { type User, type InsertUser, type BrandingSettings, type InsertBrandingSettings, type AdminSession, type InsertAdminSession } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getBrandingSettings(): Promise<BrandingSettings | undefined>;
  updateBrandingSettings(settings: InsertBrandingSettings): Promise<BrandingSettings>;
  
  createAdminSession(session: InsertAdminSession): Promise<AdminSession>;
  getAdminSession(sessionToken: string): Promise<AdminSession | undefined>;
  deleteAdminSession(sessionToken: string): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private brandingSettings: BrandingSettings | undefined;
  private adminSessions: Map<string, AdminSession>;

  constructor() {
    this.users = new Map();
    this.adminSessions = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getBrandingSettings(): Promise<BrandingSettings | undefined> {
    return this.brandingSettings;
  }

  async updateBrandingSettings(settings: InsertBrandingSettings): Promise<BrandingSettings> {
    const id = this.brandingSettings?.id || randomUUID();
    const updatedSettings: BrandingSettings = {
      id,
      logoPath: settings.logoPath ?? null,
      updatedAt: new Date(),
    };
    this.brandingSettings = updatedSettings;
    return updatedSettings;
  }

  async createAdminSession(session: InsertAdminSession): Promise<AdminSession> {
    const id = randomUUID();
    const adminSession: AdminSession = {
      id,
      sessionToken: session.sessionToken,
      expiresAt: session.expiresAt,
      createdAt: new Date(),
    };
    this.adminSessions.set(session.sessionToken, adminSession);
    return adminSession;
  }

  async getAdminSession(sessionToken: string): Promise<AdminSession | undefined> {
    const session = this.adminSessions.get(sessionToken);
    if (session && session.expiresAt > new Date()) {
      return session;
    }
    if (session) {
      this.adminSessions.delete(sessionToken);
    }
    return undefined;
  }

  async deleteAdminSession(sessionToken: string): Promise<void> {
    this.adminSessions.delete(sessionToken);
  }
}

export const storage = new MemStorage();
