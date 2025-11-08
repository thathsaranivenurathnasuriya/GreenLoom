import { Card } from "./ui/card";
import { Leaf, Heart, Users, Lightbulb } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutPage() {
  return (
    <div className="space-y-8">
     <div>
        <h1 className="text-gray-900 mb-4">About GreenLoom</h1>
        <p className="text-gray-600">
          Your trusted companion in the journey towards sustainable indoor gardening and eco-friendly living.
        </p>
      </div>

      <Card className="overflow-hidden">
        <div className="aspect-[21/9] overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1582216499382-19ad312df5e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZWQlMjBwbGFudHMlMjBob21lfGVufDF8fHx8MTc2MjUxNTc3MHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About us"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8">
          <h2 className="text-gray-900 mb-4">Our Story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              GreenLoom was founded in 2023 with a simple mission: to make indoor gardening accessible and enjoyable for everyone. We believe that bringing nature into your living space not only beautifies your home but also contributes to a healthier, more sustainable lifestyle.
            </p>
            <p>
              Our team of passionate gardeners, botanists, and sustainability advocates work together to bring you the most accurate, practical, and inspiring content about indoor plants and eco-friendly living.
            </p>
            <p>
              Whether you're a complete beginner or an experienced plant parent, GreenLoom is here to support your green journey with expert advice, detailed care guides, and a vibrant community of like-minded individuals.
            </p>
          </div>
        </div>
      </Card>

      <div>
        <h2 className="text-gray-900 mb-6">Our Core Values</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">Sustainability</h3>
                <p className="text-gray-600 leading-relaxed">
                  We promote eco-friendly practices and sustainable living through responsible plant care and environmentally conscious choices.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">Passion</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our love for plants and nature drives everything we do. We're committed to sharing this passion with our community.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">Community</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe in the power of community. Together, we learn, grow, and create greener spaces for everyone.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Lightbulb className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">Education</h3>
                <p className="text-gray-600 leading-relaxed">
                  Empowering our readers with knowledge and practical skills to become confident and successful plant parents.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card className="p-8 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
        <h2 className="text-green-900 mb-4">Join Our Green Community</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Become part of our growing community of plant enthusiasts. Follow us on social media, subscribe to our newsletter, and let's grow together!
        </p>
        <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          Subscribe Now
        </button>
      </Card>
    </div>
  );
}
