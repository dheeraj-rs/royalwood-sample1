'use client';

import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Minus, Plus, X } from 'lucide-react';
import { useCart } from '@/components/providers/cart-provider';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, updateQuantity, removeItem, total, clearCart } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg glass-dark border-l border-white/20">
        <SheetHeader>
          <SheetTitle className="text-gradient">Shopping Cart</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            <p className="text-white/60">Your cart is empty</p>
            <Button onClick={onClose} variant="outline">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto py-6 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 glass rounded-lg p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{item.name}</h3>
                    <p className="text-yellow-400 font-semibold">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="h-8 w-8 text-white/60 hover:text-white"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center text-white">{item.quantity}</span>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="h-8 w-8 text-white/60 hover:text-white"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => removeItem(item.id)}
                    className="h-8 w-8 text-red-400 hover:text-red-300"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="border-t border-white/20 pt-4 space-y-4">
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-white">Total:</span>
                <span className="text-yellow-400">${total.toFixed(2)}</span>
              </div>
              
              <div className="space-y-2">
                <Button className="w-full gradient-gold text-black font-semibold">
                  Checkout
                </Button>
                <Button
                  variant="outline"
                  onClick={clearCart}
                  className="w-full"
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}