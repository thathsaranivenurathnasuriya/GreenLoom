import { useState } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ContactPage } from "./components/ContactPage";
import { PrivacyPage } from "./components/PrivacyPage";
import { TermsPage } from "./components/TermsPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      case "privacy":
        return <PrivacyPage />;
      case "terms":
        return <TermsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          <div className="min-w-0">
            {renderPage()}
          </div>
          
          <div className="lg:sticky lg:top-24 h-fit">
            <Sidebar />
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br rounded-lg">
              <img src="/public/Logo.jpeg" alt="GreenLoom Logo" className="w-8 h-8 rounded-lg" />
            
            <div>
              <h3 className="mb-4">GreenLoom</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Your trusted guide to indoor gardening and sustainable living.
              </p>
            </div>
            </div>
            <div>
              <h4 className="text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button 
                    onClick={() => setCurrentPage("home")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage("about")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage("contact")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button 
                    onClick={() => setCurrentPage("privacy")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage("terms")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white mb-4">Categories</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Indoor Plants</li>
                <li>Care Tips</li>
                <li>Sustainability</li>
                <li>DIY Projects</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 GreenLoom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
