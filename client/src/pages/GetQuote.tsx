import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, Send } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

/**
 * Design System: Industrial Minimalism
 * - Charcoal (#1a1a1a) base with cyan (#00d9ff) accents
 * - Form styling with clear visual hierarchy
 * - Responsive layout for mobile and desktop
 */

export default function GetQuote() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    plant: "HCT-01 Ipoh",
    concreteType: "Standard Concrete",
    quantity: "",
    deliveryLocation: "",
    projectType: "Building Construction",
    deliveryDate: "",
    additionalNotes: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log("Quote Request:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setLocation("/");
    }, 3000);
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
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-6">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                        placeholder="+60 5-777 2169"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
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
                        name="plant"
                        value={formData.plant}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                      >
                        <option value="HCT-01 Ipoh">HCT-01 Plant (Ipoh)</option>
                        <option value="Sungai Siput">Sungai Siput Plant</option>
                        <option value="Kuala Kangsar">Kuala Kangsar Plant</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Concrete Type *</label>
                      <select
                        name="concreteType"
                        value={formData.concreteType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
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
                        step="0.1"
                        min="0"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
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
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
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
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                        placeholder="Project site address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Preferred Delivery Date *</label>
                      <input
                        type="date"
                        name="deliveryDate"
                        value={formData.deliveryDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
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
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                      placeholder="Any special requirements or additional information..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4 pt-6 border-t border-border">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-blue-600 flex-1"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Submit Quote Request
                  </Button>
                  <Button
                    type="button"
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/5"
                    onClick={() => setLocation("/")}
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
