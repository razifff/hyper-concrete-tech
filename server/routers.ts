import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createQuoteSubmission, getQuoteSubmissions, getQuoteSubmissionById } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Quote submission router
  quote: router({
    submit: publicProcedure
      .input(z.object({
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
      }))
      .mutation(async ({ input }) => {
        try {
          // Create quote submission in database
          const result = await createQuoteSubmission({
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
          });

          // Send notification to owner
          const notificationContent = `
New Quote Request from ${input.customerName}

Company: ${input.companyName || "Not provided"}
Email: ${input.customerEmail}
Phone: ${input.customerPhone}

Project Details:
- Plant: ${input.selectedPlant}
- Concrete Type: ${input.concreteType}
- Quantity: ${input.quantity}
- Project Type: ${input.projectType}
- Delivery Location: ${input.deliveryLocation}
- Preferred Delivery Date: ${input.preferredDeliveryDate || "Not specified"}

Additional Notes:
${input.additionalNotes || "None"}
          `;

          await notifyOwner({
            title: `New Quote Request from ${input.customerName}`,
            content: notificationContent,
          });

          return {
            success: true,
            message: "Quote request submitted successfully. We will contact you soon!",
          };
        } catch (error) {
          console.error("[Quote Router] Error submitting quote:", error);
          throw new Error("Failed to submit quote request. Please try again.");
        }
      }),

    list: publicProcedure
      .query(async () => {
        try {
          const submissions = await getQuoteSubmissions();
          return submissions;
        } catch (error) {
          console.error("[Quote Router] Error fetching submissions:", error);
          throw new Error("Failed to fetch quote submissions");
        }
      }),

    getById: publicProcedure
      .input(z.object({
        id: z.number().int().positive(),
      }))
      .query(async ({ input }) => {
        try {
          const submission = await getQuoteSubmissionById(input.id);
          if (!submission) {
            throw new Error("Quote submission not found");
          }
          return submission;
        } catch (error) {
          console.error("[Quote Router] Error fetching submission:", error);
          throw new Error("Failed to fetch quote submission");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
