// app/card/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';

const CartPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b pb-4">
          <div>
            <h2 className="text-xl font-semibold">Product Name</h2>
            <p className="text-gray-700">Price: $99.99</p>
          </div>
          <button className="btn-danger">Remove</button>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold">Total: $199.98</p>
          <Link href="/card/step-1">
            <span className="btn-primary mt-4 inline-block">Proceed to Checkout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
