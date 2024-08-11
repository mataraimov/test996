// app/marketplace/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
const categorySlug = 'example-category';
const productId = '123';
const MarketplacePage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Marketplace - All Products</h1>
      <div className="grid grid-cols-4 gap-6">
        <div className="border p-4 rounded-md shadow">
          <h2 className="text-xl font-semibold">Product Name</h2>
          <p className="text-gray-700">Price: $99.99</p>
          <Link href={`/marketplace/${categorySlug}/${productId}`}>
            <span className="btn-primary block text-center mt-4">View Product</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;
