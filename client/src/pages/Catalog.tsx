import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Package, Zap, Shield, TrendingUp } from "lucide-react";
import { useState } from "react";

/**
 * Catalog/Products Page
 * Displays concrete specifications, grades, and product offerings
 */

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const concreteProducts = [
    {
      id: 1,
      name: "Standard Ready-Mix Concrete",
      grade: "C20",
      strength: "20 MPa",
      category: "standard",
      description: "General purpose concrete suitable for most construction applications including foundations, slabs, and structural elements.",
      applications: ["Foundations", "Slabs", "General Structures", "Pavements"],
      specifications: {
        slump: "100-150mm",
        airContent: "4-6%",
        waterCement: "0.65",
        density: "2400 kg/m³"
      }
    },
    {
      id: 2,
      name: "High Strength Concrete",
      grade: "C30",
      strength: "30 MPa",
      category: "highstrength",
      description: "Enhanced strength concrete for demanding structural applications requiring superior load-bearing capacity.",
      applications: ["High-Rise Buildings", "Bridges", "Industrial Structures", "Heavy Load Areas"],
      specifications: {
        slump: "80-120mm",
        airContent: "3-5%",
        waterCement: "0.55",
        density: "2450 kg/m³"
      }
    },
    {
      id: 3,
      name: "Premium High Strength Concrete",
      grade: "C40",
      strength: "40 MPa",
      category: "highstrength",
      description: "Premium grade concrete for critical structural applications demanding maximum durability and performance.",
      applications: ["Skyscrapers", "Prestressed Structures", "Marine Structures", "Critical Infrastructure"],
      specifications: {
        slump: "60-100mm",
        airContent: "2-4%",
        waterCement: "0.45",
        density: "2500 kg/m³"
      }
    },
    {
      id: 4,
      name: "Self-Compacting Concrete",
      grade: "C25 SCC",
      strength: "25 MPa",
      category: "specialty",
      description: "Advanced self-compacting concrete that flows and consolidates without vibration, ideal for complex formwork.",
      applications: ["Complex Shapes", "Dense Reinforcement", "Architectural Finishes", "Precast Elements"],
      specifications: {
        slump: "650-750mm",
        airContent: "4-6%",
        waterCement: "0.60",
        density: "2350 kg/m³"
      }
    },
    {
      id: 5,
      name: "Fiber Reinforced Concrete",
      grade: "C25 FR",
      strength: "25 MPa",
      category: "specialty",
      description: "Concrete reinforced with synthetic fibers for enhanced crack control and improved durability.",
      applications: ["Pavements", "Industrial Floors", "Slabs on Grade", "Shotcrete Applications"],
      specifications: {
        slump: "100-150mm",
        airContent: "4-6%",
        waterCement: "0.60",
        density: "2400 kg/m³"
      }
    },
    {
      id: 6,
      name: "Lightweight Concrete",
      grade: "C15 LC",
      strength: "15 MPa",
      category: "specialty",
      description: "Lightweight concrete for reduced structural load while maintaining adequate strength for non-structural applications.",
      applications: ["Partition Walls", "Roof Decks", "Infill Panels", "Thermal Insulation"],
      specifications: {
        slump: "100-150mm",
        airContent: "6-8%",
        waterCement: "0.70",
        density: "1800 kg/m³"
      }
    }
  ];

  const categories = [
    { id: "all", name: "All Products", count: 6 },
    { id: "standard", name: "Standard Grade", count: 2 },
    { id: "highstrength", name: "High Strength", count: 2 },
    { id: "specialty", name: "Specialty", count: 3 }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? concreteProducts 
    : concreteProducts.filter(p => p.category === selectedCategory);

  const features = [
    {
      icon: Package,
      title: "Customizable Mixes",
      description: "Tailor concrete specifications to your exact project requirements"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times from order to delivery at your site"
    },
    {
      icon: Shield,
      title: "Quality Tested",
      description: "Every batch tested and certified for strength and durability"
    },
    {
      icon: TrendingUp,
      title: "Expert Support",
      description: "Technical guidance from experienced concrete specialists"
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
            <a href="/#about" className="text-base font-medium hover:text-primary transition-colors">About</a>
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
              Concrete Product Catalog
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Explore our comprehensive range of ready-mix concrete grades and specialty products designed for every construction application.
            </p>
            <a href="#products">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                View Products <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-12 md:py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">Our Concrete Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of standard and specialty concrete grades, each engineered to meet specific project requirements and international standards.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-primary text-white"
                    : "bg-slate-100 text-foreground hover:bg-slate-200"
                }`}
              >
                {cat.name} <span className="text-sm ml-2">({cat.count})</span>
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow border-t-4 border-t-primary">
                <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 border-b border-border">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.grade}</p>
                    </div>
                    <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                      {product.strength}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="font-bold text-foreground mb-3">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, idx) => (
                        <span key={idx} className="text-xs bg-blue-100 text-blue-900 px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <h4 className="font-bold text-foreground mb-3">Specifications:</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-muted-foreground text-xs">Slump</p>
                        <p className="font-medium text-foreground">{product.specifications.slump}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs">Air Content</p>
                        <p className="font-medium text-foreground">{product.specifications.airContent}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs">W/C Ratio</p>
                        <p className="font-medium text-foreground">{product.specifications.waterCement}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs">Density</p>
                        <p className="font-medium text-foreground">{product.specifications.density}</p>
                      </div>
                    </div>
                  </div>

                  <a href="/get-quote">
                    <Button className="w-full mt-6 bg-primary text-primary-foreground hover:bg-blue-600">
                      Request Quote
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-foreground text-center mb-12">Quality Standards</h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              All our concrete products comply with the following international and local standards:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "MS EN206 - Concrete Specification, Performance, Production and Conformity",
                "CIS 21 - Code of Practice for Structural Use of Concrete",
                "B.S. Standards - British Standards for Concrete",
                "ISO 9001:2015 - Quality Management System",
                "EuroCode2 - Design of Concrete Structures",
                "JKKP Registration - Department of Occupational Safety and Health"
              ].map((standard, idx) => (
                <Card key={idx} className="p-4 flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground text-sm">{standard}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-foreground mb-6">Ready to Order?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact our sales team or submit a quote request with your project specifications. We'll provide you with the perfect concrete solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/get-quote">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-blue-600">
                  Get a Quote
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
                <li><a href="/#about" className="hover:text-white transition-colors">About Us</a></li>
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
