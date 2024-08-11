// app/[companyNumber]/catalog/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';

const CatalogPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Category 1', 'Category 2', 'Category 3'].map((category, index) => (
          <div key={index} className="p-4 border rounded-md shadow hover:shadow-lg">
            <Link href={`/companyNumber/catalog/category_slag`}>
              <span className="block text-center text-xl font-semibold">{category}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
