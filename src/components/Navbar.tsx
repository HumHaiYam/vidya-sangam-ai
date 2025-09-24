import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Menu, MessageCircle, Globe, Target, Bell, User } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", nativeName: "English" },
    { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
    { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
    { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
    { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  ];

  return (
    <nav className="bg-primary shadow-elegant sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Target className="h-8 w-8 text-accent" />
            <span className="text-xl font-bold text-primary-foreground">
              Smart Match AI
            </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="/internships" className="text-primary-foreground hover:text-accent-light transition-all duration-300 font-medium">
                Find Internships
              </a>
              <a href="#" className="text-primary-foreground hover:text-accent-light transition-all duration-300 font-medium">
                Companies
              </a>
              <a href="#" className="text-primary-foreground hover:text-accent-light transition-all duration-300 font-medium">
                Students
              </a>
              <a href="#" className="text-primary-foreground hover:text-accent-light transition-all duration-300 font-medium">
                About
              </a>
            </div>
          </div>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Search */}
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
              <Search className="h-5 w-5" />
            </Button>
            
            {/* Notifications */}
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-accent rounded-full"></span>
            </Button>
            
            {/* Language Selector */}
            <Select defaultValue="en">
              <SelectTrigger className="w-32 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <Globe className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code} className="hover:bg-muted">
                    <span className="font-medium">{lang.nativeName}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent flex items-center gap-2">
              <User className="h-4 w-4" />
              Sign In
            </Button>
            <Button variant="accent" size="sm" className="shadow-button">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-foreground hover:text-accent-light p-2"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary-light rounded-lg mt-2 p-4 space-y-3">
            <a href="/internships" className="block text-primary-foreground hover:text-accent-light py-2">
              Find Internships
            </a>
            <a href="#" className="block text-primary-foreground hover:text-accent-light py-2">
              Companies
            </a>
            <a href="#" className="block text-primary-foreground hover:text-accent-light py-2">
              Students
            </a>
            <a href="#" className="block text-primary-foreground hover:text-accent-light py-2">
              About
            </a>
            <div className="pt-3 border-t border-primary">
              <Button variant="ghost" size="sm" className="w-full text-primary-foreground hover:bg-primary mb-2">
                Sign In
              </Button>
              <Button variant="accent" size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;