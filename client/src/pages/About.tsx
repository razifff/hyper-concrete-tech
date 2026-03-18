import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Award, Users, Target, Lightbulb, CheckCircle, Building2 } from "lucide-react";

/**
 * About Us Page
 * Company history, mission, vision, team, and values
 */

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We are committed to delivering the highest quality concrete products and services that exceed industry standards."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our customers' success is our success. We work closely with each client to understand and meet their unique needs."
    },
    {
      icon: Target,
      title: "Reliability",
      description: "We pride ourselves on consistent delivery, on-time service, and dependable support throughout your project."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously invest in technology and processes to improve our products and services."
    }
  ];

  const teamRoles = [
    {
      title: "Management Team",
      description: "Experienced leadership with decades of combined experience in construction, engineering, and business management."
    },
    {
      title: "Civil Engineers",
      description: "Highly qualified engineers ensuring technical excellence and compliance with all standards and specifications."
    },
    {
      title: "Technicians & Operators",
      description: "Skilled professionals managing production, quality control, and delivery operations."
    },
    {
      title: "Safety & Health Specialists",
      description: "Dedicated professionals ensuring workplace safety and compliance with occupational health regulations."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Hyper Concrete Technologies Sdn. Bhd. established with a vision to revolutionize ready-mix concrete delivery in Malaysia."
    },
    {
      year: "2021",
      title: "HCT-01 Plant Operational",
      description: "Launched our first state-of-the-art facility in Kuala Kangsar with advanced dry-mix technology and quality testing laboratory."
    },
    {
      year: "2022",
      title: "HCT-02 Plant Expansion",
      description: "Opened second production facility in Sungai Siput to expand coverage and improve delivery times across Perak."
    },
    {
      year: "2023",
      title: "Certifications Achieved",
      description: "Obtained JKKP, CIDB PPS, and CREAM certifications, demonstrating commitment to quality and safety standards."
    },
    {
      year: "2024",
      title: "Market Leadership",
      description: "Established as a trusted provider of premium ready-mix concrete solutions across Malaysia."
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
            <a href="/catalog" className="text-base font-medium hover:text-primary transition-colors">Catalog</a>
            <a href="/#services" className="text-base font-medium hover:text-primary transition-colors">Services</a>
            <a href="/#locations" className="text-base font-medium hover:text-primary transition-colors">Locations</a>
          </div>
          <a href="/get-quote">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-blue-600">
              Get Quote
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Hyper Concrete Technologies
            </h1>
            <p className="text-xl text-blue-100">
              Founded on principles of excellence, innovation, and customer focus, we are committed to delivering premium ready-mix concrete solutions across Malaysia.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hyper Concrete Technologies Sdn. Bhd. (Registration No: 202001026809) was founded in 2020 with a clear vision: to revolutionize the ready-mix concrete industry in Malaysia through innovation, quality, and customer excellence.
                </p>
                <p>
                  Our company was established by two highly experienced enterprises - IFU ERAS ENTERPRISE with over 20 years of experience in contractions and machinery, and MEKAYA ENTERPRISE with 25+ years of expertise in engineering and welding work. This combined experience forms the foundation of our technical excellence and operational expertise.
                </p>
                <p>
                  Today, we operate two state-of-the-art production facilities strategically located in Kuala Kangsar and Sungai Siput, serving construction projects across Perak and surrounding regions. Our commitment to quality, safety, and customer satisfaction has made us a trusted partner in the construction industry.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663388603059/DZbEmEKMRkcTG2RVHbRh5e/1000375591_bf82628e.jpg"
                alt="Hyper Concrete Tech Facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-t-4 border-t-primary">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide reliable and innovative concrete solutions that meet the highest standards of quality and sustainability. We aim to support our clients' construction projects with excellent service, technical expertise, and a commitment to environmental stewardship. Every batch of concrete we produce is engineered to exceed expectations and contribute to the success of your project.
              </p>
            </Card>

            <Card className="p-8 border-t-4 border-t-primary">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading provider of ready-mixed concrete in Malaysia, renowned for our quality products, exceptional customer service, and contributions to sustainable construction. We aspire to be the preferred partner for construction projects throughout the nation, setting industry standards for innovation, reliability, and environmental responsibility.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These values guide every decision we make and every action we take in serving our customers and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow border-t-4 border-t-primary">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-bold text-foreground mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in the growth and development of Hyper Concrete Technologies.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-blue-300"></div>

            <div className="space-y-8">
              {milestones.map((milestone, idx) => (
                <div key={idx} className={`flex gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="md:w-1/2">
                    <Card className={`p-6 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="text-primary font-bold text-lg mb-2">{milestone.year}</div>
                      <h4 className="font-bold text-foreground mb-2">{milestone.title}</h4>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </Card>
                  </div>
                  <div className="hidden md:flex md:w-1/2 justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-white"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A dedicated group of professionals committed to delivering excellence in every aspect of our business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {teamRoles.map((role, idx) => (
              <Card key={idx} className="p-6 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold text-foreground mb-2">{role.title}</h4>
                <p className="text-sm text-muted-foreground">{role.description}</p>
              </Card>
            ))}
          </div>

          <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-l-primary">
            <h3 className="font-bold text-foreground mb-4">Why Our Team Matters</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">Continuous training and development programs ensure our team stays current with industry best practices.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">Safety and health specialists ensure every operation meets the highest occupational safety standards.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">Our diverse team brings varied expertise and perspectives to solve complex construction challenges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">Certifications & Registrations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our facilities are fully certified and registered with relevant authorities, ensuring compliance with all industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "JKKP Registration (HCT-01)", code: "PK/22/01/190613" },
              { name: "CIDB PPS (HCT-01)", code: "1240 529 PK 1207" },
              { name: "CIDB PPS (HCT-02)", code: "1240 530 PK 1209" },
              { name: "CREAM Certification (HCT-01)", code: "CCS PC 0807-24025" },
              { name: "CREAM Certification (HCT-02)", code: "CCS PC 0807-24026" },
              { name: "MS EN206 Compliant", code: "International Standard" }
            ].map((cert, idx) => (
              <Card key={idx} className="p-6 flex items-start gap-4 border-l-4 border-l-primary">
                <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-1">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">{cert.code}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-foreground mb-6">Partner With Us</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the difference that quality, reliability, and customer focus can make for your construction project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/get-quote">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-blue-600">
                  Get a Quote <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href="/#contact">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Contact Us
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
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/catalog" className="hover:text-white transition-colors">Catalog</a></li>
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
