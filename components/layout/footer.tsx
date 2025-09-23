import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">R</span>
              </div>
              <span className="text-xl font-bold text-gradient">Royalwood</span>
            </div>
            <p className="text-white/60 text-sm">
              Crafting exquisite furniture that transforms your space into a luxury sanctuary.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 text-white/60 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-white/60 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-white/60 hover:text-yellow-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/products" className="block text-white/60 hover:text-yellow-400 transition-colors text-sm">
                All Products
              </Link>
              <Link href="/about" className="block text-white/60 hover:text-yellow-400 transition-colors text-sm">
                About Us
              </Link>
              <Link href="/contact" className="block text-white/60 hover:text-yellow-400 transition-colors text-sm">
                Contact
              </Link>
              <Link href="/shipping" className="block text-white/60 hover:text-yellow-400 transition-colors text-sm">
                Shipping Info
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Categories</h3>
            <div className="space-y-2">
              <Link href="/products?category=sofas" className="block text-white/60 hover:text-yellow-400 transition-colors text-sm">
                Sofas
              </Link>
              <Link href="/products?category=chairs" className="block text-white/60 hover:text-yellow-400 transition-colors text-sm">
                Chairs
              </Link>
              <Link href="/products?category=tables" className="block text-white/60 hover:text-yellow-400 transition-colors text-sm">
                Tables
              </Link>
              <Link href="/products?category=bedroom" className="block text-white/60 hover:text-yellow-400 transition-colors text-sm">
                Bedroom
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-yellow-400" />
                <span className="text-white/60 text-sm">123 Furniture Street, NY 10001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span className="text-white/60 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span className="text-white/60 text-sm">hello@royalwood.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 Royalwood. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-white/60 hover:text-yellow-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/60 hover:text-yellow-400 transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}