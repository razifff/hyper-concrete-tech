import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Truck, Zap, Shield, Award, Menu, X, ChevronRight, CheckCircle } from "lucide-react";
import { useState } from "react";

/**
 * Services Page
 * Showcase 4 main services with detailed descriptions and benefits
 */

export default function Services() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: Truck,
      title: "Ready-Mix Delivery",
      subtitle: "On-time, reliable concrete delivery",
      description: "Our modern fleet of mixer trucks ensures your concrete arrives fresh and ready to use. With strategic plant locations in Sungai Siput and Kuala Kangsar, we guarantee minimal delivery times and maximum freshness for every project.",
      benefits: [
        "Strategic plant locations for fast delivery",
        "Modern mixer truck fleet",
        "Consistent quality every batch",
        "24/7 support available"
      ],
      useCases: [
        "Commercial construction projects",
        "Residential developments",
        "Infrastructure projects",
        "Industrial facilities"
      ]
    },
    {
      icon: Zap,
      title: "Advanced Technology",
      subtitle: "State-of-the-art production",
      description: "Our state-of-the-art dry mix concept with systematic production ensures superior quality in every batch. Modern facilities optimize each mix for consistent, high-performance concrete that meets international standards.",
      benefits: [
        "Advanced dry-mix technology",
        "Systematic production process",
        "Quality control at every stage",
        "International standard compliance"
      ],
      useCases: [
        "High-rise buildings",
        "Bridge construction",
        "Specialized concrete grades",
        "Complex structural projects"
      ]
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      subtitle: "Rigorous testing & compliance",
      description: "Fully equipped laboratory with rigorous testing protocols guarantees durability and performance. Compliant with MS EN206, CIS 21, B.S. Standards, ISO 9001:2015, and EuroCode2 specifications.",
      benefits: [
        "Fully equipped testing laboratory",
        "Rigorous quality protocols",
        "International certifications",
        "Guaranteed durability"
      ],
      useCases: [
        "Government projects",
        "Critical infrastructure",
        "Premium residential",
        "Certified projects"
      ]
    },
    {
      icon: Award,
      title: "Customer Focus",
      subtitle: "Tailored solutions for your needs",
      description: "Tailor-made solutions designed to meet your unique project requirements and timeline. Our dedicated support team works closely with you to optimize project efficiency and budget.",
      benefits: [
        "Customized solutions",
        "Dedicated support team",
        "Project optimization",
        "Budget-friendly options"
      ],
      useCases: [
        "Small-scale projects",
        "Custom requirements",
        "Tight schedules",
        "Budget-conscious projects"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663388603059/DZbEmEKMRkcTG2RVHbRh5e/logo_fe4ed37f.jpg" alt="Hyper Concrete Tech Logo" className="h-16" />
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a href="/" className="text-base font-medium hover:text-primary transition-colors">Home</a>
            <a href="/about" className="text-base font-medium hover:text-primary transition-colors">About</a>
            <a href="/catalog" className="text-base font-medium hover:text-primary transition-colors">Catalog</a>
            <a href="/fleet" className="text-base font-medium hover:text-primary transition-colors">Fleet</a>
            <a href="/#locations" className="text-base font-medium hover:text-primary transition-colors">Locations</a>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
            <a href="/get-quote" className="flex-shrink-0">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-blue-600">
                Get Quote
              </Button>
            </a>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border">
            <div className="container py-4 space-y-3">
              <a
                href="/"
                className="block px-4 py-2 text-base font-medium hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/about"
                className="block px-4 py-2 text-base font-medium hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/catalog"
                className="block px-4 py-2 text-base font-medium hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Catalog
              </a>
              <a
                href="/fleet"
                className="block px-4 py-2 text-base font-medium hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fleet
              </a>
              <a
                href="/#locations"
                className="block px-4 py-2 text-base font-medium hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Locations
              </a>
              <a href="/get-quote" className="block">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-blue-600">
                  Get Quote
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 mb-8">Comprehensive concrete solutions backed by modern technology and industry expertise. We deliver excellence in every aspect of our service.</p>
            <a href="/get-quote">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Request a Quote <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <Card key={idx} className="p-8 hover:shadow-lg transition-all border-2 border-border hover:border-primary group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed">{service.description}</p>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, bidx) => (
                        <li key={bidx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Ideal For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, uidx) => (
                        <span key={uidx} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-lg p-8 md:p-12 border-2 border-primary/20">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Choose Hyper Concrete Tech?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2</div>
                <p className="text-foreground font-semibold">Plant Locations</p>
                <p className="text-sm text-muted-foreground">Strategic coverage across Perak</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-foreground font-semibold">Quality Assured</p>
                <p className="text-sm text-muted-foreground">Rigorous testing protocols</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-foreground font-semibold">Support Available</p>
                <p className="text-sm text-muted-foreground">Always ready to help</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <p className="text-foreground font-semibold">Certifications</p>
                <p className="text-sm text-muted-foreground">International standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Contact our team today to discuss your concrete needs and receive a customized quote for your project.</p>
          <a href="/get-quote">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Request a Quote Now <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="/catalog" className="hover:text-white transition-colors">Catalog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="/catalog" className="hover:text-white transition-colors">Concrete Grades</a></li>
                <li><a href="/fleet" className="hover:text-white transition-colors">Fleet</a></li>
                <li><a href="/catalog" className="hover:text-white transition-colors">Specifications</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-300">Phone: +60-10-9165261</li>
                <li className="text-gray-300">Phone: +60-11-1119235</li>
                <li className="text-gray-300">Email: info@hyperconcretetech.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Locations</h4>
              <ul className="space-y-2">
                <li className="text-gray-300">HCT-01: Kuala Kangsar, Perak</li>
                <li className="text-gray-300">HCT-02: Sungai Siput, Perak</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Hyper Concrete Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
