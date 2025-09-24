import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { 
  MapPin, 
  Building2, 
  Clock, 
  IndianRupee, 
  Users, 
  Search,
  Filter,
  MessageCircle,
  Send,
  Bot,
  User,
  X
} from "lucide-react";

const Internships = () => {
  const [appliedJobs, setAppliedJobs] = useState<Set<number>>(new Set());
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      type: "bot",
      content: "Hi! I'm here to help you with internship queries. Ask me anything about companies, applications, or career advice!"
    }
  ]);
  const [chatInput, setChatInput] = useState("");

  const internships = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Flipkart",
      location: "Bangalore, Karnataka",
      duration: "6 months",
      stipend: "₹25,000/month",
      type: "Remote",
      skills: ["React", "JavaScript", "CSS"],
      description: "Work on user interfaces for India's largest e-commerce platform",
      applicants: "200+"
    },
    {
      id: 2,
      title: "Full Stack Developer Intern",
      company: "Swiggy",
      location: "Hyderabad, Telangana",
      duration: "4 months",
      stipend: "₹30,000/month",
      type: "Hybrid",
      skills: ["Node.js", "React", "MongoDB"],
      description: "Build food delivery solutions for millions of Indian users",
      applicants: "150+"
    },
    {
      id: 3,
      title: "Backend Engineer Intern",
      company: "Byju's",
      location: "Bangalore, Karnataka",
      duration: "6 months",
      stipend: "₹28,000/month",
      type: "On-site",
      skills: ["Python", "Django", "AWS"],
      description: "Develop scalable education technology solutions",
      applicants: "300+"
    },
    {
      id: 4,
      title: "Data Science Intern",
      company: "Paytm",
      location: "Noida, Uttar Pradesh",
      duration: "5 months",
      stipend: "₹35,000/month",
      type: "Remote",
      skills: ["Python", "Machine Learning", "SQL"],
      description: "Analyze financial data and build ML models for fintech",
      applicants: "180+"
    },
    {
      id: 5,
      title: "Mobile App Developer Intern",
      company: "Ola",
      location: "Bangalore, Karnataka",
      duration: "6 months",
      stipend: "₹27,000/month",
      type: "Hybrid",
      skills: ["React Native", "iOS", "Android"],
      description: "Build mobility solutions for Indian transportation",
      applicants: "120+"
    },
    {
      id: 6,
      title: "UI/UX Designer Intern",
      company: "Zomato",
      location: "Gurgaon, Haryana",
      duration: "4 months",
      stipend: "₹22,000/month",
      type: "On-site",
      skills: ["Figma", "Adobe XD", "Prototyping"],
      description: "Design food discovery experiences for Indian consumers",
      applicants: "90+"
    },
    {
      id: 7,
      title: "DevOps Intern",
      company: "PhonePe",
      location: "Bangalore, Karnataka",
      duration: "6 months",
      stipend: "₹32,000/month",
      type: "Remote",
      skills: ["Docker", "Kubernetes", "AWS"],
      description: "Manage infrastructure for India's digital payment platform",
      applicants: "110+"
    },
    {
      id: 8,
      title: "Product Management Intern",
      company: "Nykaa",
      location: "Mumbai, Maharashtra",
      duration: "5 months",
      stipend: "₹26,000/month",
      type: "Hybrid",
      skills: ["Analytics", "Market Research", "SQL"],
      description: "Drive product strategy for India's beauty e-commerce leader",
      applicants: "80+"
    }
  ];

  const handleApply = (jobId: number) => {
    setAppliedJobs(prev => new Set(prev).add(jobId));
  };

  const handleChatSend = () => {
    if (chatInput.trim()) {
      setChatMessages(prev => [...prev, { type: "user", content: chatInput }]);
      setChatInput("");
      
      // Simulate AI response
      setTimeout(() => {
        const responses = [
          "That's a great question! For software roles in India, focus on building projects with React, Node.js, and cloud technologies.",
          "Indian tech companies like Flipkart and Swiggy highly value practical experience. Consider contributing to open source projects.",
          "For better chances, tailor your resume to highlight relevant skills and include projects that solve real Indian market problems.",
          "The average internship stipend in tech ranges from ₹20,000-₹35,000 per month depending on the company and role.",
          "Most companies prefer candidates with 2-3 strong projects rather than many weak ones. Quality over quantity!"
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        setChatMessages(prev => [...prev, { type: "bot", content: randomResponse }]);
      }, 1000);
    }
  };

  const filteredInternships = internships.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (selectedFilter === "all") return matchesSearch;
    if (selectedFilter === "remote") return matchesSearch && job.type === "Remote";
    if (selectedFilter === "onsite") return matchesSearch && job.type === "On-site";
    if (selectedFilter === "hybrid") return matchesSearch && job.type === "Hybrid";
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Find Your Perfect Internship</h1>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Discover opportunities at India's leading tech companies
          </p>
          
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search internships, companies, or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background text-foreground"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={selectedFilter === "all" ? "secondary" : "outline"}
                onClick={() => setSelectedFilter("all")}
                className="border-white/30"
              >
                All
              </Button>
              <Button
                variant={selectedFilter === "remote" ? "secondary" : "outline"}
                onClick={() => setSelectedFilter("remote")}
                className="border-white/30"
              >
                Remote
              </Button>
              <Button
                variant={selectedFilter === "hybrid" ? "secondary" : "outline"}
                onClick={() => setSelectedFilter("hybrid")}
                className="border-white/30"
              >
                Hybrid
              </Button>
              <Button
                variant={selectedFilter === "onsite" ? "secondary" : "outline"}
                onClick={() => setSelectedFilter("onsite")}
                className="border-white/30"
              >
                On-site
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">{filteredInternships.length}</div>
              <div className="text-sm text-muted-foreground">Active Internships</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Partner Companies</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">₹20K-₹35K</div>
              <div className="text-sm text-muted-foreground">Average Stipend</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Internships Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInternships.map((job) => (
              <Card key={job.id} className="shadow-card hover:shadow-elegant transition-all duration-300 border-primary/10">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg font-semibold text-primary">{job.title}</CardTitle>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {job.type}
                    </Badge>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <Building2 className="h-4 w-4 mr-2" />
                    <span className="font-medium">{job.company}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {job.duration}
                    </div>
                    <div className="flex items-center">
                      <IndianRupee className="h-4 w-4 mr-1" />
                      {job.stipend}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      {job.applicants} applicants
                    </div>
                    
                    <Button
                      onClick={() => handleApply(job.id)}
                      disabled={appliedJobs.has(job.id)}
                      variant={appliedJobs.has(job.id) ? "secondary" : "default"}
                      size="sm"
                      className="transition-all duration-300"
                    >
                      {appliedJobs.has(job.id) ? "Applied ✓" : "Apply Now"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {!chatOpen ? (
          <Button
            onClick={() => setChatOpen(true)}
            className="rounded-full h-14 w-14 shadow-elegant bg-primary hover:bg-primary/90"
            size="icon"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        ) : (
          <Card className="w-80 h-96 shadow-elegant border-primary/20">
            <CardHeader className="bg-primary text-primary-foreground rounded-t-lg py-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm flex items-center">
                  <Bot className="h-4 w-4 mr-2" />
                  Career Assistant
                </CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setChatOpen(false)}
                  className="h-6 w-6 text-primary-foreground hover:bg-white/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0 flex flex-col h-full">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-3 space-y-3 max-h-64">
                {chatMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-[85%] ${message.type === "user" ? "flex-row-reverse space-x-reverse" : ""}`}>
                      <div className={`p-1.5 rounded-full ${message.type === "user" ? "bg-primary" : "bg-accent"}`}>
                        {message.type === "user" ? (
                          <User className="h-3 w-3 text-white" />
                        ) : (
                          <Bot className="h-3 w-3 text-white" />
                        )}
                      </div>
                      <div
                        className={`p-2 rounded-lg text-xs ${
                          message.type === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Input */}
              <div className="border-t p-3">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Ask about internships..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleChatSend()}
                    className="flex-1 text-xs"
                  />
                  <Button onClick={handleChatSend} size="icon" className="h-8 w-8">
                    <Send className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Internships;