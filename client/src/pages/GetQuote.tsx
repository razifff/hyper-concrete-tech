import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, Send, AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";

/**
 * Design System: Industrial Minimalism
 * - Navy Blue (#1e3a8a) primary with professional slate grays
 * - Form styling with clear visual hierarchy
 * - Responsive layout for mobile and desktop
 */

export default function GetQuote() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    companyName: "",
    selectedPlant: "HCT-01 Kuala Kangsar",
    concreteType: "Standard Concrete",
    quantity: "",
    projectType: "Building Construction",
    deliveryLocation: "",
    preferredDeliveryDate: "",
    additionalNotes: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitQuoteMutation = trpc.quote.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setError(null);
      setTimeout(() => {
        setLocation("/");
      }, 3000);
    },
    onError: (err) => {
      setError(err.message || "Failed to submit quote request. Please try again.");
      setIsSubmitting(false);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Basic validation
    if (!formData.customerName.trim()) {
      setError("Please enter your name");
      setIsSubmitting(false);
      return;
    }
    if (!formData.customerEmail.trim()) {
      setError("Please enter your email");
      setIsSubmitting(false);
      return;
    }
    if (!formData.customerPhone.trim()) {
      setError("Please enter your phone number");
      setIsSubmitting(false);
      return;
    }
    if (!formData.quantity.trim()) {
      setError("Please enter the quantity");
      setIsSubmitting(false);
      return;
    }
    if (!formData.deliveryLocation.trim()) {
      setError("Please enter the delivery location");
      setIsSubmitting(false);
      return;
    }

    try {
      await submitQuoteMutation.mutateAsync({
        customerName: formData.customerName,
        customerEmail: formData.customerEmail,
        customerPhone: formData.customerPhone,
        companyName: formData.companyName || undefined,
        selectedPlant: formData.selectedPlant,
        concreteType: formData.concreteType,
        quantity: formData.quantity,
        projectType: formData.projectType,
        deliveryLocation: formData.deliveryLocation,
        preferredDeliveryDate: formData.preferredDeliveryDate || undefined,
        additionalNotes: formData.additionalNotes || undefined,
      });
    } catch (err) {
      // Error is handled by mutation's onError
      console.error("Submission error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663388603059/DZbEmEKMRkcTG2RVHbRh5e/logo_fe4ed37f.jpg" alt="Hyper Concrete Tech Logo" className="h-12" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="/#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="/#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
            <a href="/#locations" className="text-sm font-medium hover:text-primary transition-colors">Locations</a>
            <a href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </div>
          <Button onClick={() => setLocation("/")} variant="outline" className="border-primary text-primary hover:bg-primary/5">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-foreground to-blue-900 text-white py-16 md:py-24">
        <div className="container text-center space-y-4">
          <h1 className="text-white">Request a Quote</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Get a competitive quotation for your ready-mix concrete needs. Fill out the form below and our team will respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-2xl">
          {submitted ? (
            <Card className="p-12 text-center space-y-6 bg-green-50 border-2 border-green-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Send className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h2 className="text-green-900 mb-2">Quote Request Submitted!</h2>
                <p className="text-green-700">
                  Thank you for your inquiry. Our team will contact you within 24 hours with a detailed quotation.
                </p>
              </div>
              <p className="text-sm text-green-600">Redirecting to home page...</p>
            </Card>
          ) : (
            <Card className="p-8 md:p-12 border-2 border-border">
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-6">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="customerEmail"
                        value={formData.customerEmail}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="customerPhone"
                        value={formData.customerPhone}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="+60 5-777 2169"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Company Name</label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="Your company"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Information */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-6">Project Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Select Plant *</label>
                      <select
                        name="selectedPlant"
                        value={formData.selectedPlant}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground disabled:bg-gray-100 disabled:cursor-not-allowed"
                      >
                        <option value="HCT-01 Kuala Kangsar">HCT-01 Plant (Kuala Kangsar)</option>
                        <option value="HCT-02 Sungai Siput">HCT-02 Plant (Sungai Siput)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Concrete Type *</label>
                      <select
                        name="concreteType"
                        value={formData.concreteType}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground disabled:bg-gray-100 disabled:cursor-not-allowed"
                      >
                        <option value="Standard Concrete">Standard Concrete</option>
                        <option value="High Strength Concrete">High Strength Concrete</option>
                        <option value="Self-Compacting Concrete">Self-Compacting Concrete</option>
                        <option value="Fiber Reinforced Concrete">Fiber Reinforced Concrete</option>
                        <option value="Other">Other (specify in notes)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Quantity (m³) *</label>
                      <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        step="0.1"
                        min="0"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="e.g., 50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Project Type *</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground disabled:bg-gray-100 disabled:cursor-not-allowed"
                      >
                        <option value="Building Construction">Building Construction</option>
                        <option value="Road & Highway">Road & Highway</option>
                        <option value="Bridge & Infrastructure">Bridge & Infrastructure</option>
                        <option value="Commercial Development">Commercial Development</option>
                        <option value="Residential Development">Residential Development</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Delivery Information */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-6">Delivery Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Delivery Location *</label>
                      <input
                        type="text"
                        name="deliveryLocation"
                        value={formData.deliveryLocation}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="Project site address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Preferred Delivery Date</label>
                      <input
                        type="date"
                        name="preferredDeliveryDate"
                        value={formData.preferredDeliveryDate}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground disabled:bg-gray-100 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-6">Additional Information</h3>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Additional Notes</label>
                    <textarea
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="Any special requirements or additional information..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4 pt-6 border-t border-border">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="bg-primary text-primary-foreground hover:bg-blue-600 flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Quote Request
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/5"
                    onClick={() => setLocation("/")}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  * Required fields. We'll contact you within 24 hours with a detailed quotation.
                </p>
              </form>
            </Card>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container text-center">
          <p className="text-gray-300 mb-2">&copy; 2026 Hyper Concrete Technologies Sdn Bhd. All rights reserved.</p>
          <p className="text-sm text-gray-400">Phone: 05-777 2169 | Email: admin@hyperconcretetech.com</p>
        </div>
      </footer>
    </div>
  );
}
