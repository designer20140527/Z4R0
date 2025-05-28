"use client";

import { CardSpotlight } from '@/components/ui/card-spotlight';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-10">
      <CardSpotlight 
        className="max-w-md rounded-2xl" 
        style={{background: 'url(/images/color.png) bottom left / cover no-repeat'}}
        radius={400}
        color="rgba(65, 105, 225, 0.2)"
      >
        <h2 className="text-2xl font-bold text-white mb-4">Test Card Spotlight</h2>
        <p className="text-gray-300">
          This is a test of the Card Spotlight effect. Move your mouse over this card to see the effect.
        </p>
      </CardSpotlight>
    </div>
  );
} 