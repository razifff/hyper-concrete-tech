import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Quote Submissions table for Get Quote form
export const quoteSubmissions = mysqlTable("quoteSubmissions", {
  id: int("id").autoincrement().primaryKey(),
  // Customer Information
  customerName: varchar("customerName", { length: 255 }).notNull(),
  customerEmail: varchar("customerEmail", { length: 320 }).notNull(),
  customerPhone: varchar("customerPhone", { length: 20 }).notNull(),
  companyName: varchar("companyName", { length: 255 }),
  // Project Details
  selectedPlant: varchar("selectedPlant", { length: 100 }).notNull(),
  concreteType: varchar("concreteType", { length: 100 }).notNull(),
  quantity: varchar("quantity", { length: 50 }).notNull(),
  projectType: varchar("projectType", { length: 100 }).notNull(),
  // Delivery Information
  deliveryLocation: text("deliveryLocation").notNull(),
  preferredDeliveryDate: varchar("preferredDeliveryDate", { length: 50 }),
  // Additional Notes
  additionalNotes: text("additionalNotes"),
  // Status
  status: mysqlEnum("status", ["pending", "reviewed", "quoted", "completed"]).default("pending").notNull(),
  // Timestamps
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type QuoteSubmission = typeof quoteSubmissions.$inferSelect;
export type InsertQuoteSubmission = typeof quoteSubmissions.$inferInsert;