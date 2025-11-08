import { BlogPost } from "./BlogPost";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const blogPosts = [
  {
    id: 1,
    title: "10 Best Indoor Plants for Beginners: Start Your Green Journey",
    excerpt: "Discover the perfect starter plants that are low-maintenance and perfect for those new to indoor gardening. From snake plants to pothos, we'll guide you through the essentials.",
    image: "https://images.unsplash.com/photo-1654608904829-3e856604383d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBwbGFudHMlMjBncmVlbnxlbnwxfHx8fDE3NjI0NDE5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "Nov 5, 2025",
    author: "Sarah Green",
    category: "Indoor Plants"
  },
  {
    id: 2,
    title: "The Ultimate Guide to Succulent Care: Tips and Tricks",
    excerpt: "Learn everything you need to know about caring for succulents, from watering schedules to the perfect soil mix. These resilient plants are perfect for busy lifestyles.",
    image: "https://images.unsplash.com/photo-1621512367176-03782e847fa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjdWxlbnQlMjBwbGFudHN8ZW58MXx8fHwxNzYyNDQyOTY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "Nov 3, 2025",
    author: "Mike Johnson",
    category: "Care Tips"
  },
  {
    id: 3,
    title: "How to Propagate Monstera Plants at Home",
    excerpt: "Step-by-step guide to propagating your Monstera deliciosa. Save money and expand your plant collection by learning this simple technique that any plant parent can master.",
    image: "https://images.unsplash.com/photo-1626929252164-27c26d107b00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25zdGVyYSUyMHBsYW50fGVufDF8fHx8MTc2MjQ1NTg0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    date: "Nov 1, 2025",
    author: "Emma Williams",
    category: "DIY Projects"
  }
];

export function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1582216499382-19ad312df5e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZWQlMjBwbGFudHMlMjBob21lfGVufDF8fHx8MTc2MjUxNTc3MHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative px-12 py-16">
          <h1 className="mb-4 max-w-3xl">
            Welcome to GreenLoom: Your Indoor Plant Sanctuary
          </h1>
          <p className="text-xl max-w-2xl text-green-50 leading-relaxed">
            Discover sustainable living through indoor gardening. Expert tips, plant care guides, and eco-friendly solutions for your urban oasis.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-green-700 rounded-lg hover:bg-green-50 transition-colors">
            Explore Our Blog
          </button>
        </div>
      </div>

      {/* Latest Posts */}
      <div>
        <div className="mb-6">
          <h2 className="text-gray-900 mb-2">Latest Posts</h2>
          <p className="text-gray-600">Discover our newest articles about indoor plants and sustainable living</p>
        </div>
        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <BlogPost {...post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
