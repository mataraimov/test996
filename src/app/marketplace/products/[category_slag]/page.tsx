// app/marketplace/products/[category_slag]/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';

const MarketplaceCategoryPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Marketplace Category Name</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="p-4 border rounded-md shadow hover:shadow-lg">
              <Link href={`/marketplace/products/category_slag/product_id`}>
                <span className="block text-center text-xl font-semibold">Product Name</span>
              </Link>
              <p className="text-center text-gray-700 mt-2">$99.99</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MarketplaceCategoryPage;
