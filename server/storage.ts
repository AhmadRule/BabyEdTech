import { type User, type InsertUser, type BrandingSettings, type InsertBrandingSettings, type AdminSession, type InsertAdminSession, type ClientLogo, type InsertClientLogo, type ContactSubmission, type InsertContactSubmission, type KindergartenOnboarding, type InsertKindergartenOnboarding } from "@shared/schema";
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
  
  createClientLogo(logo: InsertClientLogo): Promise<ClientLogo>;
  getAllClientLogos(): Promise<ClientLogo[]>;
  deleteClientLogo(id: string): Promise<void>;
  
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
  
  createKindergartenOnboarding(onboarding: InsertKindergartenOnboarding): Promise<KindergartenOnboarding>;
  getAllKindergartenOnboardings(): Promise<KindergartenOnboarding[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private brandingSettings: BrandingSettings | undefined;
  private adminSessions: Map<string, AdminSession>;
  private clientLogos: Map<string, ClientLogo>;
  private contactSubmissions: Map<string, ContactSubmission>;
  private kindergartenOnboardings: Map<string, KindergartenOnboarding>;

  constructor() {
    this.users = new Map();
    this.adminSessions = new Map();
    this.clientLogos = new Map();
    this.contactSubmissions = new Map();
    this.kindergartenOnboardings = new Map();
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

  async createClientLogo(insertLogo: InsertClientLogo): Promise<ClientLogo> {
    const id = randomUUID();
    const logo: ClientLogo = {
      id,
      name: insertLogo.name,
      logoPath: insertLogo.logoPath,
      displayOrder: insertLogo.displayOrder ?? null,
      createdAt: new Date(),
    };
    this.clientLogos.set(id, logo);
    return logo;
  }

  async getAllClientLogos(): Promise<ClientLogo[]> {
    return Array.from(this.clientLogos.values()).sort((a, b) => {
      const orderA = parseInt(a.displayOrder || '999');
      const orderB = parseInt(b.displayOrder || '999');
      return orderA - orderB;
    });
  }

  async deleteClientLogo(id: string): Promise<void> {
    this.clientLogos.delete(id);
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = {
      id,
      name: insertSubmission.name,
      email: insertSubmission.email,
      phone: insertSubmission.phone,
      nurseryName: insertSubmission.nurseryName,
      message: insertSubmission.message ?? null,
      createdAt: new Date(),
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values()).sort((a, b) => 
      (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async createKindergartenOnboarding(insertOnboarding: InsertKindergartenOnboarding): Promise<KindergartenOnboarding> {
    const id = randomUUID();
    const onboarding: KindergartenOnboarding = {
      id,
      kindergartenName: insertOnboarding.kindergartenName,
      contactName: insertOnboarding.contactName,
      email: insertOnboarding.email,
      phone: insertOnboarding.phone,
      city: insertOnboarding.city,
      logoPath: insertOnboarding.logoPath,
      status: "pending",
      createdAt: new Date(),
    };
    this.kindergartenOnboardings.set(id, onboarding);
    return onboarding;
  }

  async getAllKindergartenOnboardings(): Promise<KindergartenOnboarding[]> {
    return Array.from(this.kindergartenOnboardings.values()).sort((a, b) => 
      (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }
}

export const storage = new MemStorage();
