import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles, TrendingUp, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-hero min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary-light rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-light rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Find Your Perfect{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Internship
              </span>{" "}
              in India
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Connect with top Indian companies and unlock your career potential with AI-powered matching. 
              Discover internships tailored for Indian students across all industries.
            </p>

            {/* Search bar */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8 border border-white/20">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-accent" />
                AI-Powered Search
              </h3>
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Search internships, companies, or skills..." 
                    className="pl-10 bg-white border-white/30 focus:border-accent text-foreground"
                  />
                </div>
                <Button variant="accent" size="lg" className="shadow-button hover:shadow-lg transition-all duration-300">
                  Search
                </Button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="shadow-button hover:scale-105 transition-all duration-300">
                Start Your Journey
              </Button>
              <Button variant="ghost" size="lg" className="text-white border-white/30 hover:bg-white/10">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">10K+</div>
                <div className="text-white/70 text-sm">Active Internships</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">500+</div>
                <div className="text-white/70 text-sm">Partner Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">50K+</div>
                <div className="text-white/70 text-sm">Students Placed</div>
              </div>
            </div>
          </div>

          {/* Right content - Feature cards */}
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-accent p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white ml-4">Smart Matching</h3>
              </div>
              <p className="text-white/80">
                Our AI analyzes your skills, preferences, and career goals to match you with the most relevant internship opportunities across India.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-success p-3 rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white ml-4">Indian Companies</h3>
              </div>
              <p className="text-white/80">
                Connect directly with leading Indian startups and enterprises. From Bangalore to Mumbai, Delhi to Chennai - find opportunities everywhere.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-accent-light p-3 rounded-lg">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white ml-4">Career Growth</h3>
              </div>
              <p className="text-white/80">
                Get mentorship, skill development resources, and career guidance tailored for the Indian job market and industry demands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;