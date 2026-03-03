import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Truck, Zap, Shield, Award, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

/**
 * Design System: Industrial Minimalism
 * - Charcoal (#1a1a1a) base with cyan (#00d9ff) accents
 * - Poppins for headings (bold, geometric), Inter for body (readable)
 * - Asymmetric layouts, diagonal dividers, staggered cards
 * - Scroll-triggered animations, smooth transitions
 */

export default function Home() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Truck,
      title: "Ready-Mix Delivery",
      description: "On-time, reliable concrete delivery to your construction site with our modern fleet of mixer trucks.",
      details: "Strategic plant locations in Sungai Siput and Kuala Kangsar ensure minimal delivery times and maximum freshness."
    },
    {
      icon: Zap,
      title: "Advanced Technology",
      description: "State-of-the-art dry mix concept with systematic production ensuring superior quality in every batch.",
      details: "Our modern facilities optimize each mix for consistent, high-performance concrete that meets international standards."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Fully equipped laboratory with rigorous testing protocols to guarantee durability and performance.",
      details: "Compliant with MS EN206, CIS 21, B.S. Standards, ISO 9001:2015, and EuroCode2 specifications."
    },
    {
      icon: Award,
      title: "Customer Focus",
      description: "Tailor-made solutions designed to meet your unique project requirements and timeline.",
      details: "Dedicated support team working closely with you to optimize project efficiency and budget."
    }
  ];

  const locations = [
    {
      name: "HCT-01 Plant (Ipoh)",
      region: "Perak",
      coverage: "Ipoh, Meru, Chemor, Sungai Siput, Kuala Kangsar, and nearby areas",
      status: "Operational"
    },
    {
      name: "Sungai Siput Plant",
      region: "Perak",
      coverage: "Sungai Siput, Manong, Padang Rengas",
      status: "Operational"
    },
    {
      name: "Kuala Kangsar Plant",
      region: "Perak",
      coverage: "Kuala Kangsar, Lenggong, surrounding areas",
      status: "Operational"
    }
  ];

  const features = [
    {
      title: "Unmatched Quality",
      description: "Cutting-edge technology and industry-leading expertise ensure every batch exceeds expectations."
    },
    {
      title: "Efficiency & Reliability",
      description: "Time is money in construction. We keep your projects on schedule with consistent, timely delivery."
    },
    {
      title: "Sustainability",
      description: "Committed to environmentally responsible practices in modern construction landscape."
    },
    {
      title: "Cost Savings",
      description: "Strategic plant locations reduce transportation distances, minimizing logistics expenses."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663388603059/DZbEmEKMRkcTG2RVHbRh5e/logo_fe4ed37f.jpg" alt="Hyper Concrete Tech Logo" className="h-12" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
            <a href="#locations" className="text-sm font-medium hover:text-primary transition-colors">Locations</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </div>
          <a href="/get-quote">
            <Button className="bg-primary text-primary-foreground hover:bg-blue-600">
              Get Quote
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="container py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-foreground leading-tight">
                  Premier Ready-Mix Concrete Solutions
                </h1>
                <p className="text-lg text-muted-foreground">
                  Delivering exceptional quality, reliability, and innovation to construction projects across Malaysia.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#services">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-blue-600">
                    Explore Services <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                <a href="#about">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                    Learn More
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div>
                  <div className="text-2xl font-bold text-primary">3</div>
                  <p className="text-sm text-muted-foreground">Plant Locations</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <p className="text-sm text-muted-foreground">Quality Assured</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <p className="text-sm text-muted-foreground">Support Available</p>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-96 md:h-full rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663388603059/DZbEmEKMRkcTG2RVHbRh5e/1000375585_d28a1586.png"
                alt="Hyper Concrete Tech Fleet and Plant"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Diagonal Divider */}
        <svg className="w-full h-24 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-foreground">About Hyper Concrete Technologies</h2>
            <p className="text-lg text-muted-foreground">
              We are passionate about delivering top-notch ready-mix concrete products tailored to meet your construction needs. With two strategically positioned plants and a commitment to excellence, we serve the construction industry across Malaysia.
            </p>
          </div>

          <div className="mb-12">
            <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl" style={{aspectRatio: '16/9'}}>
              <video 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663388603059/DZbEmEKMRkcTG2RVHbRh5e/AQMiVEQkyF29xc7kH0aOsVAQe-FPVl15E0ix4DvSyUor-f0J89Gwp8IlC1i3NLPdBduRM1WCjkxOLpLxTHKjyeVr_852d86f6.mp4"
                controls
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <Card key={idx} className="p-8 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-foreground">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive concrete solutions backed by modern technology and industry expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={idx}
                  className={`p-8 cursor-pointer transition-all border-2 ${
                    activeService === idx 
                      ? 'border-primary bg-white shadow-lg' 
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setActiveService(idx)}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      {activeService === idx && (
                        <div className="pt-4 border-t border-border">
                          <p className="text-sm text-foreground font-medium">{service.details}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-foreground mb-8">Quality & Compliance</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our ready-mixed concrete blends adhere to rigorous international standards and specifications.
              </p>
              <div className="space-y-4">
                {["MS EN206", "CIS 21", "B.S. Standards", "ISO 9001:2015", "EuroCode2"].map((standard, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-medium text-foreground">{standard}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663388603059/DZbEmEKMRkcTG2RVHbRh5e/Picsart_26-03-03_13-29-20-230_4f6327ce.jpg"
                alt="Quality Testing Laboratory"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plant Locations Section */}
      <section id="locations" className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-foreground">Our Plant Locations</h2>
            <p className="text-lg text-muted-foreground">
              Strategically positioned facilities ensuring rapid delivery and optimal concrete freshness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {locations.map((location, idx) => (
              <Card key={idx} className="p-8 border-2 border-border hover:border-primary transition-colors">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{location.name}</h3>
                    <p className="text-sm text-muted-foreground">{location.region}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Coverage Area</p>
                    <p className="text-foreground font-medium">{location.coverage}</p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded">
                      {location.status}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Delivery Coverage Image */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663388603059/DZbEmEKMRkcTG2RVHbRh5e/construction-site-concrete-PctmX3ESNYawLKkZfTJhNY.webp"
              alt="Construction Site Delivery"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Delivery Process Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-foreground">How We Deliver Excellence</h2>
            <p className="text-lg text-muted-foreground">
              From production to your site, every step ensures quality and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: "01", title: "Order", description: "Place your concrete order with specific requirements" },
              { number: "02", title: "Production", description: "Mix concrete to exact specifications in our facility" },
              { number: "03", title: "Quality Check", description: "Rigorous testing ensures standards compliance" },
              { number: "04", title: "Delivery", description: "On-time delivery with fresh, quality concrete" }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto font-bold text-xl">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[40%] h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Truck Delivery Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
              <video 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663388603059/DZbEmEKMRkcTG2RVHbRh5e/1000350880_f6291242.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-foreground mb-6">Reliable Delivery Fleet</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our modern fleet of mixer trucks ensures timely delivery of fresh, high-quality concrete to your construction site.
              </p>
              <ul className="space-y-4">
                {[
                  "Modern, well-maintained mixer trucks",
                  "GPS-tracked for real-time updates",
                  "Professional, trained drivers",
                  "Flexible scheduling to meet your needs",
                  "Reduced transportation times from our plants"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-foreground to-blue-900 text-white">
        <div className="container text-center space-y-8">
          <h2 className="text-white">Ready to Get Started?</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Contact us today to discuss your concrete requirements and receive a competitive quote.
          </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/get-quote">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-blue-600">
                Request Quote
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-foreground">Get In Touch</h2>
              <p className="text-lg text-muted-foreground">
                Have questions? We're here to help and provide the concrete solutions you need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 text-center border-t-4 border-t-primary">
                <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground">05-777 2169</p>
              </Card>
              <Card className="p-8 text-center border-t-4 border-t-primary">
                <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">admin@hyperconcretetech.com</p>
              </Card>
              <Card className="p-8 text-center border-t-4 border-t-primary">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Locations</h3>
                <p className="text-muted-foreground">Sungai Siput & Kuala Kangsar</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Hyper Concrete Tech</h4>
              <p className="text-gray-300 text-sm">Premier ready-mix concrete solutions for Malaysia's construction industry.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-primary transition-colors">Ready-Mix Delivery</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Quality Assurance</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Custom Solutions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Our Plants</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 Hyper Concrete Technologies Sdn Bhd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
