import { Leaf } from "lucide-react";


interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Contact Us", id: "contact" },
    { name: "Privacy Policy", id: "privacy" },
    { name: "Terms and Conditions", id: "terms" }
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <div className="bg-gradient-to-br from-green-600 to-green-700 p-2 rounded-lg">
              <img src="/public/Logo.jpeg" alt="GreenLoom Logo" className="w-6 h-6 rounded-lg" />
            </div>
            <div>
              <h1 className="text-green-800">GreenLoom</h1>
              <p className="text-xs text-gray-500">Weaving Life Through Nature</p>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav>
            <ul className="flex items-center gap-8">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className={`transition-colors hover:text-green-600 ${
                      currentPage === item.id
                        ? "text-green-600"
                        : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
