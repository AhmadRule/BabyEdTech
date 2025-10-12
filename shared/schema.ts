import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const brandingSettings = pgTable("branding_settings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  logoPath: text("logo_path"),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertBrandingSettingsSchema = createInsertSchema(brandingSettings).omit({
  id: true,
  updatedAt: true,
});

export type InsertBrandingSettings = z.infer<typeof insertBrandingSettingsSchema>;
export type BrandingSettings = typeof brandingSettings.$inferSelect;

export const adminSessions = pgTable("admin_sessions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  sessionToken: text("session_token").notNull().unique(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertAdminSessionSchema = createInsertSchema(adminSessions).omit({
  id: true,
  createdAt: true,
});

export type InsertAdminSession = z.infer<typeof insertAdminSessionSchema>;
export type AdminSession = typeof adminSessions.$inferSelect;

export const clientLogos = pgTable("client_logos", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  logoPath: text("logo_path").notNull(),
  displayOrder: text("display_order"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertClientLogoSchema = createInsertSchema(clientLogos).omit({
  id: true,
  createdAt: true,
});

export type InsertClientLogo = z.infer<typeof insertClientLogoSchema>;
export type ClientLogo = typeof clientLogos.$inferSelect;

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  nurseryName: text("nursery_name").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
});

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

export const kindergartenOnboarding = pgTable("kindergarten_onboarding", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  kindergartenName: text("kindergarten_name").notNull(),
  contactName: text("contact_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  city: text("city").notNull(),
  logoPath: text("logo_path").notNull(),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertKindergartenOnboardingSchema = createInsertSchema(kindergartenOnboarding).omit({
  id: true,
  status: true,
  createdAt: true,
});

export type InsertKindergartenOnboarding = z.infer<typeof insertKindergartenOnboardingSchema>;
export type KindergartenOnboarding = typeof kindergartenOnboarding.$inferSelect;
