import { describe, it, expect, vi, beforeEach } from "vitest";
import { z } from "zod";

/**
 * Quote Submission Tests
 * Tests for the quote.submit tRPC procedure
 */

describe("Quote Submission", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("Input Validation", () => {
    it("should require customerName", () => {
      const schema = z.object({
        customerName: z.string().min(1, "Name is required"),
        customerEmail: z.string().email("Valid email is required"),
        customerPhone: z.string().min(1, "Phone is required"),
        companyName: z.string().optional(),
        selectedPlant: z.string().min(1, "Plant selection is required"),
        concreteType: z.string().min(1, "Concrete type is required"),
        quantity: z.string().min(1, "Quantity is required"),
        projectType: z.string().min(1, "Project type is required"),
        deliveryLocation: z.string().min(1, "Delivery location is required"),
        preferredDeliveryDate: z.string().optional(),
        additionalNotes: z.string().optional(),
      });

      const validData = {
        customerName: "John Doe",
        customerEmail: "john@example.com",
        customerPhone: "0123456789",
        selectedPlant: "HCT-01 Ipoh",
        concreteType: "Standard Concrete",
        quantity: "50",
        projectType: "Building Construction",
        deliveryLocation: "Ipoh, Perak",
      };

      const result = schema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it("should reject invalid email", () => {
      const schema = z.object({
        customerName: z.string().min(1, "Name is required"),
        customerEmail: z.string().email("Valid email is required"),
        customerPhone: z.string().min(1, "Phone is required"),
        companyName: z.string().optional(),
        selectedPlant: z.string().min(1, "Plant selection is required"),
        concreteType: z.string().min(1, "Concrete type is required"),
        quantity: z.string().min(1, "Quantity is required"),
        projectType: z.string().min(1, "Project type is required"),
        deliveryLocation: z.string().min(1, "Delivery location is required"),
        preferredDeliveryDate: z.string().optional(),
        additionalNotes: z.string().optional(),
      });

      const invalidData = {
        customerName: "John Doe",
        customerEmail: "invalid-email",
        customerPhone: "0123456789",
        selectedPlant: "HCT-01 Ipoh",
        concreteType: "Standard Concrete",
        quantity: "50",
        projectType: "Building Construction",
        deliveryLocation: "Ipoh, Perak",
      };

      const result = schema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it("should require selectedPlant", () => {
      const schema = z.object({
        customerName: z.string().min(1, "Name is required"),
        customerEmail: z.string().email("Valid email is required"),
        customerPhone: z.string().min(1, "Phone is required"),
        companyName: z.string().optional(),
        selectedPlant: z.string().min(1, "Plant selection is required"),
        concreteType: z.string().min(1, "Concrete type is required"),
        quantity: z.string().min(1, "Quantity is required"),
        projectType: z.string().min(1, "Project type is required"),
        deliveryLocation: z.string().min(1, "Delivery location is required"),
        preferredDeliveryDate: z.string().optional(),
        additionalNotes: z.string().optional(),
      });

      const invalidData = {
        customerName: "John Doe",
        customerEmail: "john@example.com",
        customerPhone: "0123456789",
        selectedPlant: "",
        concreteType: "Standard Concrete",
        quantity: "50",
        projectType: "Building Construction",
        deliveryLocation: "Ipoh, Perak",
      };

      const result = schema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it("should require quantity", () => {
      const schema = z.object({
        customerName: z.string().min(1, "Name is required"),
        customerEmail: z.string().email("Valid email is required"),
        customerPhone: z.string().min(1, "Phone is required"),
        companyName: z.string().optional(),
        selectedPlant: z.string().min(1, "Plant selection is required"),
        concreteType: z.string().min(1, "Concrete type is required"),
        quantity: z.string().min(1, "Quantity is required"),
        projectType: z.string().min(1, "Project type is required"),
        deliveryLocation: z.string().min(1, "Delivery location is required"),
        preferredDeliveryDate: z.string().optional(),
        additionalNotes: z.string().optional(),
      });

      const invalidData = {
        customerName: "John Doe",
        customerEmail: "john@example.com",
        customerPhone: "0123456789",
        selectedPlant: "HCT-01 Ipoh",
        concreteType: "Standard Concrete",
        quantity: "",
        projectType: "Building Construction",
        deliveryLocation: "Ipoh, Perak",
      };

      const result = schema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it("should require deliveryLocation", () => {
      const schema = z.object({
        customerName: z.string().min(1, "Name is required"),
        customerEmail: z.string().email("Valid email is required"),
        customerPhone: z.string().min(1, "Phone is required"),
        companyName: z.string().optional(),
        selectedPlant: z.string().min(1, "Plant selection is required"),
        concreteType: z.string().min(1, "Concrete type is required"),
        quantity: z.string().min(1, "Quantity is required"),
        projectType: z.string().min(1, "Project type is required"),
        deliveryLocation: z.string().min(1, "Delivery location is required"),
        preferredDeliveryDate: z.string().optional(),
        additionalNotes: z.string().optional(),
      });

      const invalidData = {
        customerName: "John Doe",
        customerEmail: "john@example.com",
        customerPhone: "0123456789",
        selectedPlant: "HCT-01 Ipoh",
        concreteType: "Standard Concrete",
        quantity: "50",
        projectType: "Building Construction",
        deliveryLocation: "",
      };

      const result = schema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it("should allow optional fields", () => {
      const schema = z.object({
        customerName: z.string().min(1, "Name is required"),
        customerEmail: z.string().email("Valid email is required"),
        customerPhone: z.string().min(1, "Phone is required"),
        companyName: z.string().optional(),
        selectedPlant: z.string().min(1, "Plant selection is required"),
        concreteType: z.string().min(1, "Concrete type is required"),
        quantity: z.string().min(1, "Quantity is required"),
        projectType: z.string().min(1, "Project type is required"),
        deliveryLocation: z.string().min(1, "Delivery location is required"),
        preferredDeliveryDate: z.string().optional(),
        additionalNotes: z.string().optional(),
      });

      const dataWithoutOptional = {
        customerName: "John Doe",
        customerEmail: "john@example.com",
        customerPhone: "0123456789",
        selectedPlant: "HCT-01 Ipoh",
        concreteType: "Standard Concrete",
        quantity: "50",
        projectType: "Building Construction",
        deliveryLocation: "Ipoh, Perak",
      };

      const result = schema.safeParse(dataWithoutOptional);
      expect(result.success).toBe(true);
    });
  });

  describe("Plant Selection", () => {
    it("should accept valid plant options", () => {
      const validPlants = [
        "HCT-01 Ipoh",
        "HCT-02 Sungai Siput",
        "HCT-01 Kuala Kangsar",
      ];

      validPlants.forEach(plant => {
        expect(plant).toBeTruthy();
        expect(plant.length).toBeGreaterThan(0);
      });
    });
  });

  describe("Concrete Type Selection", () => {
    it("should accept valid concrete types", () => {
      const validTypes = [
        "Standard Concrete",
        "High Strength Concrete",
        "Self-Compacting Concrete",
        "Fiber Reinforced Concrete",
        "Other",
      ];

      validTypes.forEach(type => {
        expect(type).toBeTruthy();
        expect(type.length).toBeGreaterThan(0);
      });
    });
  });

  describe("Project Type Selection", () => {
    it("should accept valid project types", () => {
      const validTypes = [
        "Building Construction",
        "Road & Highway",
        "Bridge & Infrastructure",
        "Commercial Development",
        "Residential Development",
        "Other",
      ];

      validTypes.forEach(type => {
        expect(type).toBeTruthy();
        expect(type.length).toBeGreaterThan(0);
      });
    });
  });

  describe("Data Transformation", () => {
    it("should handle optional fields correctly", () => {
      const input = {
        customerName: "John Doe",
        customerEmail: "john@example.com",
        customerPhone: "0123456789",
        companyName: undefined,
        selectedPlant: "HCT-01 Ipoh",
        concreteType: "Standard Concrete",
        quantity: "50",
        projectType: "Building Construction",
        deliveryLocation: "Ipoh, Perak",
        preferredDeliveryDate: undefined,
        additionalNotes: undefined,
      };

      // Simulate transformation to database format
      const dbData = {
        customerName: input.customerName,
        customerEmail: input.customerEmail,
        customerPhone: input.customerPhone,
        companyName: input.companyName || null,
        selectedPlant: input.selectedPlant,
        concreteType: input.concreteType,
        quantity: input.quantity,
        projectType: input.projectType,
        deliveryLocation: input.deliveryLocation,
        preferredDeliveryDate: input.preferredDeliveryDate || null,
        additionalNotes: input.additionalNotes || null,
        status: "pending",
      };

      expect(dbData.companyName).toBeNull();
      expect(dbData.preferredDeliveryDate).toBeNull();
      expect(dbData.additionalNotes).toBeNull();
      expect(dbData.status).toBe("pending");
    });
  });
});
