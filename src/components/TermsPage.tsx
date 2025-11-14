import { Card } from "./ui/card";
import { FileText, AlertCircle, Scale, CheckCircle } from "lucide-react";

export function TermsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-gray-900 mb-4">Terms and Conditions</h1>
        <p className="text-gray-600">
          Last Updated: November 7, 2025
        </p>
      </div>

      <Card className="p-8 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
        <div className="flex items-start gap-4">
          <div className="bg-green-600 p-3 rounded-lg">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-green-900 mb-2">Welcome to GreenLoom</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using the GreenLoom website, you accept and agree to be bound by the terms and provisions of this agreement. Please read these Terms and Conditions carefully before using our website.
            </p>
          </div>
        </div>
      </Card>

      <div className="space-y-6">
        <Card className="p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <CheckCircle className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-gray-900">1. Acceptance of Terms</h2>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed ml-14">
            <p>
              By accessing this website, you agree to be bound by these Terms and Conditions, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </div>
        </Card>

        <Card className="p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Scale className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="text-gray-900">2. Use License</h2>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed ml-14">
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on GreenLoom's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </div>
        </Card>

        <Card className="p-8">
          <h2 className="text-gray-900 mb-4">3. Content and Intellectual Property</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, audio clips, and software, is the property of GreenLoom or its content suppliers and is protected by international copyright laws.
            </p>
            <p>
              The compilation of all content on this site is the exclusive property of GreenLoom and is protected by international copyright laws.
            </p>
          </div>
        </Card>

        <Card className="p-8">
          <h2 className="text-gray-900 mb-4">4. User Comments and Submissions</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Users may post comments and other content on our blog posts, provided that the content is not illegal, obscene, threatening, defamatory, invasive of privacy, infringing of intellectual property rights, or otherwise injurious to third parties.
            </p>
            <p>
              GreenLoom reserves the right to remove or edit any comments at our sole discretion. By posting comments, you grant GreenLoom a non-exclusive, royalty-free, perpetual license to use, reproduce, and publish such content.
            </p>
          </div>
        </Card>

        <Card className="p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-orange-100 p-2 rounded-lg">
              <AlertCircle className="w-5 h-5 text-orange-600" />
            </div>
            <h2 className="text-gray-900">5. Disclaimer</h2>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed ml-14">
            <p>
              The information provided on GreenLoom is for general informational and educational purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The completeness, accuracy, reliability, suitability, or availability of the information</li>
              <li>Plant care advice - results may vary based on individual circumstances</li>
              <li>Any products or services mentioned on the website</li>
            </ul>
            <p>
              Any reliance you place on such information is strictly at your own risk. We recommend consulting with professional botanists or horticulturists for specific plant care concerns.
            </p>
          </div>
        </Card>

        <Card className="p-8">
          <h2 className="text-gray-900 mb-4">6. Limitations of Liability</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              In no event shall GreenLoom or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on GreenLoom's website.
            </p>
          </div>
        </Card>

        <Card className="p-8">
          <h2 className="text-gray-900 mb-4">7. Links to Third-Party Websites</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Our website may contain links to third-party websites that are not owned or controlled by GreenLoom. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites.
            </p>
            <p>
              We strongly advise you to read the terms and conditions and privacy policies of any third-party websites that you visit.
            </p>
          </div>
        </Card>

        <Card className="p-8">
          <h2 className="text-gray-900 mb-4">8. Newsletter and Email Communications</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              By subscribing to our newsletter, you agree to receive periodic emails from GreenLoom. You may unsubscribe at any time by clicking the unsubscribe link in any email or by contacting us directly.
            </p>
          </div>
        </Card>

        <Card className="p-8">
          <h2 className="text-gray-900 mb-4">9. Modifications to Terms</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              GreenLoom reserves the right to revise these Terms and Conditions at any time. By using this website, you are expected to review these terms periodically to ensure you understand all terms and conditions governing use of this website.
            </p>
          </div>
        </Card>

        <Card className="p-8">
          <h2 className="text-gray-900 mb-4">10. Governing Law</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of California, USA, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>
        </Card>

        <Card className="p-8 bg-green-50 border-green-200">
          <h2 className="text-green-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have any questions about these Terms and Conditions, please contact us:
          </p>
          <div className="space-y-2 text-gray-700">
            <p>Email: greenloom60@gmail.com</p>
            <p>Phone: +94 71 650 3056</p>
            <p>Address: Pasal Mawatha, Unawtuna, Buttala</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
