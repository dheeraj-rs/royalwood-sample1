'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Star, ShoppingBag, Heart, Truck, Shield, RotateCcw } from 'lucide-react';
import { useCart } from '@/components/providers/cart-provider';
import { toast } from 'sonner';

// Mock product data
const mockProduct = {
  id: '1',
  name: 'Royal Executive Chair',
  price: 1299,
  originalPrice: 1599,
  images: [
    'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  category: 'chairs',
  rating: 4.9,
  reviews: 127,
  description: 'Elevate your workspace with the Royal Executive Chair, a masterpiece of comfort and sophistication. Crafted with premium leather and ergonomic design, this chair combines luxury with functionality to create the perfect seating solution for executives and professionals.',
  features: [
    'Premium Italian leather upholstery',
    'Ergonomic lumbar support',
    'Height adjustable with pneumatic lift',
    '360-degree swivel with smooth casters',
    'Solid wood frame construction',
    'Memory foam cushioning'
  ],
  specifications: {
    'Dimensions': '28"W x 30"D x 42-46"H',
    'Weight Capacity': '300 lbs',
    'Material': 'Italian Leather, Solid Oak',
    'Color': 'Dark Brown',
    'Assembly': 'Minimal assembly required',
    'Warranty': '5 years'
  },
  inStock: true,
  freeShipping: true
};

export default function ProductDetailPage() {
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  // In a real app, you'd fetch the product based on params.id
  const product = mockProduct;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0]
      });
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    toast.success('Redirecting to checkout...');
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square glass rounded-xl overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-yellow-400'
                        : 'border-white/20 hover:border-white/40'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="text-yellow-400 text-sm uppercase tracking-wider font-medium">
                  {product.category}
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2">
                  {product.name}
                </h1>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-white/60">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-yellow-400">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-white/60 line-through">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-600 text-white px-2 py-1 rounded text-sm font-medium">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-white/80 text-lg leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                <h3 className="text-white font-semibold text-lg">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-white/70">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity and Actions */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-white">Quantity:</span>
                  <div className="flex items-center glass rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-white hover:text-yellow-400"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 text-white">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-white hover:text-yellow-400"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={handleAddToCart}
                    className="flex-1 gradient-gold text-black font-semibold hover:opacity-90"
                    size="lg"
                  >
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    onClick={handleBuyNow}
                    variant="outline"
                    className="flex-1 border-white/20 text-white hover:bg-white/10"
                    size="lg"
                  >
                    Buy Now
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsLiked(!isLiked)}
                    className={`${
                      isLiked ? 'text-red-400' : 'text-white/60 hover:text-red-400'
                    }`}
                  >
                    <Heart className={`h-6 w-6 ${isLiked ? 'fill-current' : ''}`} />
                  </Button>
                </div>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2 text-sm text-white/70">
                  <Truck className="h-5 w-5 text-yellow-400" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-white/70">
                  <Shield className="h-5 w-5 text-yellow-400" />
                  <span>5 Year Warranty</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-white/70">
                  <RotateCcw className="h-5 w-5 text-yellow-400" />
                  <span>30 Day Returns</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Specifications */}
          <div className="mt-16 glass rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gradient mb-6">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white/60">{key}:</span>
                  <span className="text-white font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}