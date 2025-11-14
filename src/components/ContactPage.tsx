import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { useState } from "react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-gray-900 mb-4">Contact Us</h1>
        <p className="text-gray-600">
          Have questions or feedback? We'd love to hear from you. Reach out to us anytime!
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <Mail className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 text-sm">greenloom60@gmail.com</p>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <Phone className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 text-sm">+94 71 650 3056</p>
            <p className="text-gray-600 text-sm">Mon - Fri, 9am - 5pm</p>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex flex-col items-center text-center">
            <div className="bg-purple-100 p-4 rounded-full mb-4">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600 text-sm">Pasal Mawatha</p>
            <p className="text-gray-600 text-sm">Unawtuna, Buttala</p>
          </div>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-8">
          <h2 className="text-gray-900 mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                Your Name *
              </label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                Email Address *
              </label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm text-gray-700 mb-2">
                Subject *
              </label>
              <Input
                id="subject"
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="How can we help?"
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                Message *
              </label>
              <Textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us more about your inquiry..."
                className="w-full min-h-[150px]"
              />
            </div>

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              Send Message
            </Button>
          </form>
        </Card>

        <div className="space-y-6">
          <Card className="p-8 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-green-600 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-green-900 mb-2">Business Hours</h3>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 10:00 AM - 3:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-gray-900 mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div>
                <p className="text-green-600 mb-1">How quickly do you respond?</p>
                <p className="text-sm text-gray-600">We typically respond to all inquiries within 24-48 hours during business days.</p>
              </div>
              <div>
                <p className="text-green-600 mb-1">Can I request a specific topic?</p>
                <p className="text-sm text-gray-600">Absolutely! We love hearing content suggestions from our community.</p>
              </div>
              <div>
                <p className="text-green-600 mb-1">Do you offer plant consulting?</p>
                <p className="text-sm text-gray-600">Yes! Contact us for personalized plant care advice and consultations.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
