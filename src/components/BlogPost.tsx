import { Card } from "./ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BlogPostProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export function BlogPost({ title, excerpt, image, date, author, category }: BlogPostProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-[16/9] overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
            {category}
          </span>
        </div>
        <h2 className="text-gray-900 mb-3 hover:text-green-600 cursor-pointer transition-colors">
          {title}
        </h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
          </div>
        </div>
        <button className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors">
          Read More
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </Card>
  );
}
