'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Star, ShoppingBag, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/components/providers/cart-provider';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating?: number;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <div className="group relative glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
      <Link href={`/products/${product.id}`}>
        <div className="aspect-square relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
          )}
          
          {/* Wishlist Button */}
          <Button
            size="icon"
            variant="ghost"
            onClick={(e) => {
              e.preventDefault();
              setIsLiked(!isLiked);
            }}
            className={`absolute top-4 right-4 glass rounded-full transition-all duration-200 ${
              isLiked ? 'text-red-400' : 'text-white/60 hover:text-red-400'
            }`}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
          </Button>

          {/* Quick Add to Cart */}
          <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              onClick={handleAddToCart}
              className="w-full gradient-gold text-black font-semibold hover:opacity-90"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </Link>

      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs text-yellow-400 uppercase tracking-wider font-medium">
            {product.category}
          </span>
        </div>
        
        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-yellow-400 transition-colors">
          {product.name}
        </h3>

        {product.rating && (
          <div className="flex items-center mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating!)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-white/60 text-sm ml-2">({product.rating})</span>
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-yellow-400">
            ${product.price.toLocaleString()}
          </span>
          <Link href={`/products/${product.id}`}>
            <Button variant="ghost" className="text-white/60 hover:text-white">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}