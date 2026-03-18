import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Truck, Zap, MapPin, Users, CheckCircle } from "lucide-react";

/**
 * Fleet & Truck Sizes Page
 * Showcase different truck capacities and their advantages
 */

export default function Fleet() {
  const truckSizes = [
    {
      id: 1,
      capacity: "1 Cubic Meter",
      title: "Mini Mixer Truck",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663388603059/DZbEmEKMRkcTG2RVHbRh5e/6sia3DdKaMcw_eb80a2e3.jpg",
      advantages: [
        "Perfect for tight access roads and narrow construction sites",
        "Ideal for small-scale projects and repairs",
        "Lower fuel consumption and operating costs",
        "Easy maneuverability in congested urban areas",
        "Suitable for residential and commercial renovations"
      ],
      specifications: {
        capacity: "1 m³",
        maxLoad: "2-3 tons",
        dimensions: "Compact and mobile",
        fuelType: "Diesel",
        idealFor: "Small projects, tight spaces"
      },
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 2,
      capacity: "3 Cubic Meters",
      title: "Standard Mixer Truck",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663388603059/DZbEmEKMRkcTG2RVHbRh5e/zKWsMNHMIcXn_7aafcc9b.jpg",
      advantages: [
        "Most versatile option for medium-sized projects",
        "Balanced capacity for efficiency and flexibility",
        "Suitable for most construction sites and road conditions",
        "Cost-effective for regular commercial projects",
        "Excellent for residential and light industrial work"
      ],
      specifications: {
        capacity: "3 m³",
        maxLoad: "5-7 tons",
        dimensions: "Standard truck size",
        fuelType: "Diesel",
        idealFor: "Medium projects, standard sites"
      },
      color: "from-green-400 to-green-600"
    },
    {
      id: 3,
      capacity: "6 Cubic Meters",
      title: "Large Capacity Truck",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663388603059/DZbEmEKMRkcTG2RVHbRh5e/vSvClRQFyop7_759106b9.webp",
      advantages: [
        "Maximum capacity for large-scale projects",
        "Ideal for high-volume concrete requirements",
        "Most economical per cubic meter for bulk orders",
        "Perfect for infrastructure and major construction",
        "Reduces number of trips and delivery time"
      ],
      specifications: {
        capacity: "6 m³",
        maxLoad: "10-12 tons",
        dimensions: "Large commercial truck",
        fuelType: "Diesel",
        idealFor: "Large projects, bulk orders"
      },
      color: "from-orange-400 to-orange-600"
    }
  ];

  const benefits = [
    {
      icon: MapPin,
      title: "Access Flexibility",
      description: "Our diverse fleet ensures we can reach any construction site, regardless of access road width or site conditions."
    },
    {
      icon: Zap,
      title: "Optimized Efficiency",
      description: "Choose the right truck size for your project to minimize waste and maximize cost-effectiveness."
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "Multiple truck options mean we can always meet your delivery schedule and volume requirements."
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "We understand every project is unique. Our fleet variety allows us to serve all customer needs."
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
              Our Diverse Fleet
            </h1>
            <p className="text-xl text-blue-100">
              Flexible concrete delivery solutions with trucks ranging from 1m³ to 6m³ capacity. We can reach any construction site, no matter how tight the access.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">Why Fleet Variety Matters</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Different projects have different requirements. Our fleet of varied truck sizes ensures we can serve every customer need efficiently and cost-effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow border-t-4 border-t-primary">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-bold text-foreground mb-3">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Truck Sizes Showcase */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">Our Truck Sizes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the right capacity for your project. Each truck size offers unique advantages for different construction scenarios.
            </p>
          </div>

          <div className="space-y-12">
            {truckSizes.map((truck, idx) => (
              <div key={truck.id} className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? "md:grid-cols-2 md:[&>*:first-child]:order-2" : ""}`}>
                {/* Image */}
                <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src={truck.image}
                    alt={truck.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${truck.color} opacity-10`}></div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${truck.color} text-white rounded-full text-sm font-bold mb-4`}>
                      {truck.capacity}
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">{truck.title}</h3>
                  </div>

                  {/* Specifications */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-l-primary">
                    <h4 className="font-bold text-foreground mb-4">Specifications</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Capacity</p>
                        <p className="font-bold text-foreground">{truck.specifications.capacity}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Max Load</p>
                        <p className="font-bold text-foreground">{truck.specifications.maxLoad}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Dimensions</p>
                        <p className="font-bold text-foreground">{truck.specifications.dimensions}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Fuel Type</p>
                        <p className="font-bold text-foreground">{truck.specifications.fuelType}</p>
                      </div>
                    </div>
                  </div>

                  {/* Advantages */}
                  <div>
                    <h4 className="font-bold text-foreground mb-4">Ideal For</h4>
                    <ul className="space-y-3">
                      {truck.advantages.map((advantage, adIdx) => (
                        <li key={adIdx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a href="/get-quote">
                    <Button className="bg-primary text-primary-foreground hover:bg-blue-600 w-full md:w-auto">
                      Request This Truck <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">Quick Comparison</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compare our truck sizes side-by-side to find the perfect fit for your project.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-4 text-left font-bold">Feature</th>
                  <th className="border border-primary p-4 text-center font-bold">1m³ Mini</th>
                  <th className="border border-primary p-4 text-center font-bold">3m³ Standard</th>
                  <th className="border border-primary p-4 text-center font-bold">6m³ Large</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50">
                  <td className="border border-border p-4 font-bold">Capacity</td>
                  <td className="border border-border p-4 text-center">1 m³</td>
                  <td className="border border-border p-4 text-center">3 m³</td>
                  <td className="border border-border p-4 text-center">6 m³</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-border p-4 font-bold">Max Load</td>
                  <td className="border border-border p-4 text-center">2-3 tons</td>
                  <td className="border border-border p-4 text-center">5-7 tons</td>
                  <td className="border border-border p-4 text-center">10-12 tons</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-border p-4 font-bold">Access</td>
                  <td className="border border-border p-4 text-center">✓ Excellent</td>
                  <td className="border border-border p-4 text-center">✓ Good</td>
                  <td className="border border-border p-4 text-center">✓ Standard</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-border p-4 font-bold">Cost per m³</td>
                  <td className="border border-border p-4 text-center">Higher</td>
                  <td className="border border-border p-4 text-center">Medium</td>
                  <td className="border border-border p-4 text-center">Lower</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-border p-4 font-bold">Best For</td>
                  <td className="border border-border p-4 text-center">Small projects</td>
                  <td className="border border-border p-4 text-center">Medium projects</td>
                  <td className="border border-border p-4 text-center">Large projects</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Concrete Delivered?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Choose the right truck size for your project and get a quote today. Our flexible fleet is ready to serve you.
            </p>
            <a href="/get-quote">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
                Get a Quote Now <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
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
                Premier ready-mix concrete solutions with flexible fleet options for all project sizes.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/catalog" className="hover:text-white transition-colors">Catalog</a></li>
                <li><a href="/fleet" className="hover:text-white transition-colors">Fleet</a></li>
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
