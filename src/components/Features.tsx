import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Building2, GraduationCap, TrendingUp, Shield, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "Pan-India Opportunities",
      description: "Access internships across major Indian cities including Mumbai, Delhi, Bangalore, Chennai, Hyderabad, and Pune.",
      badge: "500+ Cities",
      color: "bg-primary"
    },
    {
      icon: Building2,
      title: "Top Indian Companies",
      description: "Connect with leading Indian startups, unicorns, and established companies from TCS to Flipkart, Ola to Paytm.",
      badge: "1000+ Companies",
      color: "bg-accent"
    },
    {
      icon: GraduationCap,
      title: "Skill Development",
      description: "Get access to specialized training programs, workshops, and mentorship designed for Indian students.",
      badge: "Expert Mentors",
      color: "bg-success"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Track your progress with analytics, get career advice, and build a professional network within India.",
      badge: "Growth Focused",
      color: "bg-primary-light"
    },
    {
      icon: Shield,
      title: "Verified Opportunities",
      description: "All internships are verified and legitimate. We ensure safe and secure application processes.",
      badge: "100% Verified",
      color: "bg-accent-light"
    },
    {
      icon: Zap,
      title: "Instant Matching",
      description: "Get matched with relevant opportunities instantly using our advanced AI algorithms tailored for Indian job market.",
      badge: "AI Powered",
      color: "bg-success"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose{" "}
            <span className="text-primary">
              Smart Match AI?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built specifically for Indian students and the Indian job market. We understand the unique challenges and opportunities in India's dynamic internship landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-primary/10 hover:border-primary/20"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-3 rounded-xl ${feature.color} shadow-button group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs font-medium">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-muted/50 rounded-2xl p-8 lg:p-12 border border-primary/10">
          <h3 className="text-2xl font-bold text-center mb-12">Trusted by Students Across India</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Active Internships</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Partner Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-success mb-2">50,000+</div>
              <div className="text-muted-foreground">Students Helped</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-light mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;