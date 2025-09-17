import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Send, Sparkles, Bot, User } from "lucide-react";
import { useState } from "react";

const AIShowcase = () => {
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "Hello! I'm your AI internship assistant. How can I help you find the perfect internship today?",
    },
    {
      type: "user", 
      content: "I'm looking for a software engineering internship in Bangalore",
    },
    {
      type: "bot",
      content: "Great! I found 47 software engineering internships in Bangalore. Based on your profile, here are the top 3 matches: 1) Frontend Developer at Flipkart 2) Full Stack Intern at Swiggy 3) Backend Engineer at Byju's. Would you like more details about any of these?",
    }
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { type: "user", content: inputValue }]);
      setInputValue("");
      
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: "bot",
          content: "That's a great question! Let me search through our database of Indian companies and find the best matches for your requirements..."
        }]);
      }, 1000);
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-primary p-3 rounded-xl shadow-button">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Experience Our{" "}
            <span className="text-primary">
              AI Assistant
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Chat with our intelligent AI to discover internships, get career advice, and navigate the Indian job market with personalized recommendations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* AI Chat Demo */}
          <div className="order-2 lg:order-1">
            <Card className="shadow-elegant border-primary/10">
              <CardHeader className="bg-primary text-white rounded-t-lg">
                <CardTitle className="flex items-center">
                  <Bot className="h-6 w-6 mr-3" />
                  Smart Match AI Assistant
                  <div className="ml-auto flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span className="text-sm">Online</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {/* Chat Messages */}
                <div className="h-80 overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.type === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                    >
                      <div className={`flex items-start space-x-2 max-w-xs ${message.type === "user" ? "flex-row-reverse space-x-reverse" : ""}`}>
                        <div className={`p-2 rounded-full ${message.type === "user" ? "bg-primary" : "bg-accent"}`}>
                          {message.type === "user" ? (
                            <User className="h-4 w-4 text-white" />
                          ) : (
                            <Bot className="h-4 w-4 text-white" />
                          )}
                        </div>
                        <div
                          className={`p-3 rounded-lg ${
                            message.type === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-card border shadow-sm"
                          }`}
                        >
                          <p className="text-sm leading-relaxed">{message.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input Area */}
                <div className="border-t p-4">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Ask about internships, companies, or career advice..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSend()}
                      className="flex-1"
                    />
                    <Button 
                      onClick={handleSend}
                      variant="default"
                      size="icon"
                      className="shadow-button"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features List */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="bg-card p-6 rounded-xl shadow-card border hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-primary p-3 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold ml-4">Intelligent Conversations</h3>
              </div>
              <p className="text-muted-foreground">
                Have natural conversations about your career goals, skills, and preferences. Our AI understands context and provides personalized guidance.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-card border hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-accent p-3 rounded-lg">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold ml-4">Smart Recommendations</h3>
              </div>
              <p className="text-muted-foreground">
                Get personalized internship recommendations based on your skills, location preferences, and career aspirations within the Indian market.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-card border hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-success p-3 rounded-lg">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold ml-4">24/7 Support</h3>
              </div>
              <p className="text-muted-foreground">
                Available round the clock to help you with interview preparation, company research, and application guidance for Indian companies.
              </p>
            </div>

            <div className="text-center pt-6">
              <Button variant="accent" size="lg" className="shadow-button hover:scale-105 transition-all duration-300">
                Try AI Assistant Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIShowcase;