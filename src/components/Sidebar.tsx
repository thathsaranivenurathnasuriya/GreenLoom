import { Facebook, Youtube, Mail, MapPin } from "lucide-react";
import { Card } from "./ui/card";

export function Sidebar() {
  return (
    <aside className="space-y-6">
      {/* About Section */}
      <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
        <h3 className="text-green-800 mb-3">About GreenLoom</h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          Your ultimate guide to indoor gardening and sustainable living. We help you bring nature into your home.
        </p>
      </Card>

      {/* Social Media Links */}
      <Card className="p-6">
        <h3 className="text-gray-900 mb-4">Follow Us</h3>
        <div className="space-y-3">
          <a
            href="https://www.facebook.com/profile.php?id=61583223463638&sfnsn=wa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors group"
          >
            <div className="bg-blue-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Facebook className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-blue-900">Facebook</p>
              <p className="text-xs text-blue-700">@GreenLoomBlog</p>
            </div>
          </a>

          <a
            href="https://www.youtube.com/channel/UCsFBfaksEN_O4AVU077PIBQ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-red-50 hover:bg-red-100 transition-colors group"
          >
            <div className="bg-red-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Youtube className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-red-900">YouTube</p>
              <p className="text-xs text-red-700">@GreenLoomChannel</p>
            </div>
          </a>
        </div>
      </Card>

      {/* Contact Info */}
      <Card className="p-6">
        <h3 className="text-gray-900 mb-4">Contact Info</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3 text-sm">
            <Mail className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <p className="text-gray-600">Email</p>
              <p className="text-gray-900">info@greenloom.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <MapPin className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <p className="text-gray-600">Location</p>
              <p className="text-gray-900">Green Valley, CA</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Categories */}
      <Card className="p-6">
        <h3 className="text-gray-900 mb-4">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {["Indoor Plants", "Care Tips", "Sustainability", "DIY Projects", "Plant Reviews"].map((category) => (
            <span
              key={category}
              className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs hover:bg-green-200 cursor-pointer transition-colors"
            >
              {category}
            </span>
          ))}
        </div>
      </Card>
    </aside>
  );
}
