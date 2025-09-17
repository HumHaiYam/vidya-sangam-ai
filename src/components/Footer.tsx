import { MessageCircle, MapPin, Mail, Phone, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-primary-light p-2 rounded-lg shadow-button">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold">Smart Match AI</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Empowering Indian students to find their perfect internship opportunities with AI-powered matching and career guidance.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 bg-primary-light rounded-lg hover:bg-accent transition-colors cursor-pointer">
                <Linkedin className="h-5 w-5" />
              </div>
              <div className="p-2 bg-primary-light rounded-lg hover:bg-accent transition-colors cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="p-2 bg-primary-light rounded-lg hover:bg-accent transition-colors cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Find Internships</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">For Companies</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Career Resources</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Bangalore, Karnataka, India
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  support@smartmatchai.in
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  +91 80123 45678
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-light mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Smart Match AI. All rights reserved. Made with ❤️ for Indian students.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-primary-foreground/60 text-sm">Available in:</span>
              <span className="text-accent text-sm">English • हिन्दी • தமிழ் • ಕನ್ನಡ • తెలుగు</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;