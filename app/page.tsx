'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Truck, Shield, Award } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProductCard } from '@/components/products/product-card';

const featuredProducts = [
  {
    id: '1',
    name: 'Royal Executive Chair',
    price: 1299,
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'chairs',
    rating: 4.9
  },
  {
    id: '2',
    name: 'Luxury Dining Table',
    price: 2499,
    image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'tables',
    rating: 4.8
  },
  {
    id: '3',
    name: 'Premium Sofa Set',
    price: 3999,
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'sofas',
    rating: 4.9
  },
  {
    id: '4',
    name: 'Classic Bedroom Set',
    price: 4599,
    image: 'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'bedroom',
    rating: 4.7
  }
];

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Free delivery on orders over $500'
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: '100% secure payment processing'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Handcrafted with finest materials'
  }
];

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1920")'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className={`relative z-10 text-center space-y-6 px-4 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
            <span className="text-white">Luxury</span>{' '}
            <span className="text-gradient">Redefined</span>
          </h1>
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto">
            Discover exquisite handcrafted furniture that transforms your space into a luxury sanctuary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="gradient-gold text-black font-semibold hover:opacity-90 animate-glow">
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              View Catalog
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 glass rounded-full animate-float hidden lg:block"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 glass rounded-full animate-float hidden lg:block" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center space-y-4 glass rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="mx-auto w-16 h-16 gradient-gold rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient">Featured Collection</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Handpicked pieces that represent the pinnacle of craftsmanship and design
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join thousands of satisfied customers who have elevated their homes with Royalwood furniture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="gradient-gold text-black font-semibold hover:opacity-90">
                Shop Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Get Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}