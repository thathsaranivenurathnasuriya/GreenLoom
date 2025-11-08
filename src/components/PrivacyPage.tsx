import { Card } from "./ui/card";
import { Shield, Lock, Eye, Database } from "lucide-react";

export function PrivacyPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-600">
          Last Updated: November 7, 2025
        </p>
      </div>

      <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
        <div className="flex items-start gap-4">
          <div className="bg-blue-600 p-3 rounded-lg">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-blue-900 mb-2">Your Privacy Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              At GreenLoom, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
            </p>
          </div>
        </div>
      </Card>

      <div className="space-y-6">
        <Card className="p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-green-100 p-2 rounded-lg">
              <Database className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-gray-900">1. Information We Collect</h2>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed ml-14">
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and email address when you subscribe to our newsletter</li>
              <li>Contact information when you fill out our contact form</li>
              <li>Comments and feedback you provide on our blog posts</li>
              <li>Information about your preferences and interests in indoor gardening</li>
            </ul>
            <p>
              We also automatically collect certain information about your device and how you interact with our website, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Browser type and version</li>
              <li>Pages you visit and time spent on each page</li>
              <li>IP address and general location data</li>
              <li>Referring website and search terms used</li>
            </ul>
          </div>
        </Card>

        <Card className="p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Eye className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="text-gray-900">2. How We Use Your Information</h2>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed ml-14">
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Send you our newsletter and updates about new blog posts</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Improve our website content and user experience</li>
              <li>Analyze trends and gather demographic information</li>
              <li>Send you promotional materials (only if you've opted in)</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>
          </div>
        </Card>

        <Card className="p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Lock className="w-5 h-5 text-orange-600" />
            </div>
            <h2 className="text-gray-900">3. Information Sharing and Disclosure</h2>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed ml-14">
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With service providers who assist us in operating our website</li>
              <li>To comply with legal obligations or protect our rights</li>
              <li>With your explicit consent</li>
              <li>In connection with a business transfer or merger</li>
            </ul>
          </div>
        </Card>

        <Card className="p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Shield className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-gray-900">4. Data Security</h2>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed ml-14">
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>
        </Card>

        <Card className="p-8">
          <h2 className="text-gray-900 mb-4">5. Your Rights</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications at any time</li>
              <li>Object to processing of your personal data</li>
            </ul>
          </div>
        </Card>

        <Card className="p-8">
          <h2 className="text-gray-900 mb-4">6. Cookies</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings, but disabling cookies may affect the functionality of our site.
            </p>
          </div>
        </Card>

        <Card className="p-8">
          <h2 className="text-gray-900 mb-4">7. Children's Privacy</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>
          </div>
        </Card>

        <Card className="p-8">
          <h2 className="text-gray-900 mb-4">8. Changes to This Policy</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </div>
        </Card>

        <Card className="p-8 bg-green-50 border-green-200">
          <h2 className="text-green-900 mb-4">Contact Us About Privacy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
          <div className="space-y-2 text-gray-700">
            <p>Email: privacy@greenloom.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Green Valley Road, California, CA 94000</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
