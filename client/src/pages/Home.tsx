import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Truck, Zap, Shield, Award, MapPin, Phone, Mail, CheckCircle, Building2, Users, Briefcase, Menu, X } from "lucide-react";
import { useState } from "react";
import { MapView } from "@/components/Map";

/**
 * Design System: Corporate Navy Blue
 * - Navy Blue (#1e3a8a) primary with professional slate grays
 * - Clean, modern aesthetic with excellent readability
 * - Poppins for headings (bold, geometric), Inter for body (readable)
 * - Asymmetric layouts, diagonal dividers, staggered cards
 * - Scroll-triggered animations, smooth transitions
 */

export default function Home() {
  let { user, loading, error, isAuthenticated, logout } = useAuth();
  const [activeService, setActiveService] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      name: "HCT-01 Plant (Kuala Kangsar)",
      region: "Perak",
      coverage: "Sungai Siput, Manong, Padang Rengas, Enggor, Lenggong, and nearby areas",
      status: "Operational",
      address: "Lot 1976 Jalan Lubuk Merbau, Kawasan Perindustrian Miel Fasa 1, Taman Impian, 33010 Kuala Kangsar, Perak",
      phone: "+05-777 2169"
    },
    {
      name: "HCT-02 Plant (Sungai Siput)",
      region: "Perak",
      coverage: "Kuala Kangsar, Ipoh, Meru, Chemor, Tanjung Rambutan, Tasek, and nearby areas",
      status: "Operational",
      address: "Sungai Siput, Perak",
      phone: "+05-777 2169"
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

  const certifications = [
    { name: "JKKP Registration (HCT-01)", code: "PK/22/01/190613" },
    { name: "CIDB PPS (HCT-01)", code: "1240 529 PK 1207" },
    { name: "CIDB PPS (HCT-02)", code: "1240 530 PK 1209" },
    { name: "CREAM Certification (HCT-01)", code: "CCS PC 0807-24025" },
    { name: "CREAM Certification (HCT-02)", code: "CCS PC 0807-24026" },
    { name: "MS EN206 Compliant", code: "International Standard" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663388603059/DZbEmEKMRkcTG2RVHbRh5e/logo_fe4ed37f.jpg" alt="Hyper Concrete Tech Logo" className="h-16" />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <a href="/about" className="text-base font-medium hover:text-primary transition-colors">About</a>
            <a href="/services" className="text-base font-medium hover:text-primary transition-colors">Services</a>
            <a href="/catalog" className="text-base font-medium hover:text-primary transition-colors">Catalog</a>
            <a href="/fleet" className="text-base font-medium hover:text-primary transition-colors">Fleet</a>
            <a href="#locations" className="text-base font-medium hover:text-primary transition-colors">Locations</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          <a href="/get-quote" className="hidden sm:block">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-blue-600">
              Get Quote
            </Button>
          </a>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border">
            <div className="container py-4 space-y-3">
              <a href="/about" className="block text-base font-medium hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="/services" className="block text-base font-medium hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="/catalog" className="block text-base font-medium hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Catalog</a>
              <a href="/fleet" className="block text-base font-medium hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Fleet</a>
              <a href="#locations" className="block text-base font-medium hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Locations</a>
              <a href="/get-quote" className="block sm:hidden">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-blue-600">
                  Get Quote
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="container py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-foreground leading-tight">
                  Premier Ready-Mix Concrete Solutions
                </h1>
                <p className="text-lg text-muted-foreground">
                  Delivering exceptional quality, reliability, and innovation to construction projects across Malaysia. Hyper Concrete Technologies is your trusted partner for premium ready-mix concrete with 24/7 support.
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

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                <div>
                  <div className="text-2xl font-bold text-primary">2</div>
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

      {/* Company Profile Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-foreground">About Hyper Concrete Technologies</h2>
              <p className="text-lg text-muted-foreground">
                Founded in 2020, Hyper Concrete Technologies Sdn. Bhd. (Registration No: 202001026809) is a ready-mix concrete manufacturing company committed to excellence and innovation in the construction industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-white border-l-4 border-l-primary">
                <div className="flex items-start gap-4">
                  <Building2 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Our Foundation</h3>
                    <p className="text-muted-foreground">
                      Hyper Concrete Technologies was founded by two highly experienced enterprises: IFU ERAS ENTERPRISE (20+ years in contractions and machinery) and MEKAYA ENTERPRISE (25+ years in engineering and welding work). This combined expertise positions us as a leader in the ready-mix concrete industry.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-slate-50 to-white border-l-4 border-l-primary">
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Our Team</h3>
                    <p className="text-muted-foreground">
                      Our workforce comprises highly experienced Civil Engineers, Technicians, Safety & Health specialists, IT professionals, and skilled tradesmen. We invest in continuous training to ensure our team meets the highest industry standards and exceeds client expectations.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 border-t-4 border-t-primary">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-primary" />
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide reliable and innovative concrete solutions that meet the highest standards of quality and sustainability. We aim to support our clients' construction projects with excellent service, technical expertise, and a commitment to environmental stewardship.
                </p>
              </Card>

              <Card className="p-8 border-t-4 border-t-primary">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary" />
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading provider of ready-mixed concrete in Malaysia, renowned for our quality products, exceptional customer service, and contributions to sustainable construction. We aspire to be the preferred partner for construction projects throughout the nation.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Video */}
      <section id="about" className="bg-slate-50 py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <h2 className="text-foreground">Why Choose Hyper Concrete Technologies?</h2>
            <p className="text-lg text-muted-foreground">
              We combine decades of industry experience with modern technology and customer-centric values to deliver exceptional concrete solutions.
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
      <section id="services" className="py-12 md:py-20 bg-white">
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
                      ? 'border-primary bg-blue-50 shadow-lg' 
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setActiveService(idx)}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
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
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-foreground mb-8">Quality & Compliance</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our ready-mixed concrete blends adhere to rigorous international standards and specifications, ensuring durability and performance for every project.
              </p>
              <div className="space-y-4">
                {["MS EN206", "CIS 21", "B.S. Standards", "ISO 9001:2015", "EuroCode2"].map((standard, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
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

      {/* Certifications Section */}
      <section id="certifications" className="py-12 md:py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <h2 className="text-foreground">Certifications & Registrations</h2>
            <p className="text-lg text-muted-foreground">
              Our facilities are fully certified and registered with relevant authorities, ensuring compliance with all industry standards and regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <Card key={idx} className="p-6 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.code}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plant Locations Section */}
      <section id="locations" className="py-20 md:py-32 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-foreground">Our Plant Locations</h2>
            <p className="text-lg text-muted-foreground">
              Strategically positioned facilities ensuring rapid delivery and optimal concrete freshness across Perak and surrounding regions.
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
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1">Address</p>
                    <p className="text-foreground text-sm">{location.address}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1">Coverage Area</p>
                    <p className="text-foreground font-medium">{location.coverage}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1">Contact</p>
                    <p className="text-foreground font-medium">{location.phone}</p>
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
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663388603059/DZbEmEKMRkcTG2RVHbRh5e/1000375591_bf82628e.jpg"
              alt="Concrete Plant Facility"
              className="w-full h-full object-cover object-bottom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-foreground">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">
                Have questions about our concrete solutions? Contact us today for a quote or more information.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 text-center border-t-4 border-t-primary">
                <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground">+05-777 2169</p>
                <p className="text-muted-foreground text-sm">017-502 6663 / 011-111 92359</p>
              </Card>

              <Card className="p-8 text-center border-t-4 border-t-primary">
                <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">admin@hyperconcretetech.com</p>
              </Card>

              <Card className="p-8 text-center border-t-4 border-t-primary">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Address</h3>
                <p className="text-muted-foreground text-sm">Lot 4794 Kg. Tebing Tinggi, Jalan Besar Karai, Enggor, 33600 Perak</p>
              </Card>
            </div>

            <div className="mt-12">
              <a href="/get-quote">
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-blue-600">
                  Request a Quote Today
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Hyper Concrete Technologies</h4>
              <p className="text-slate-400 text-sm">
                Premier ready-mix concrete solutions for construction projects across Malaysia.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#locations" className="hover:text-white transition-colors">Locations</a></li>
                <li><a href="/get-quote" className="hover:text-white transition-colors">Get Quote</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Phone: +05-777 2169</li>
                <li>Email: admin@hyperconcretetech.com</li>
                <li>Reg. No: 202001026809</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2024 Hyper Concrete Technologies Sdn. Bhd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
