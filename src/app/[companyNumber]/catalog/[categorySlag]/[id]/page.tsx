// app/[companyNumber]/catalog/[category_slag]/[id]/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
// import styles from './Product.module.css'; // Importing modular CSS for custom styles

const ProductPage = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={` relative`}>
          <Image
            src="/path-to-product-image.jpg"
            alt="Product Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col justify-between">
          <h1 className="text-4xl font-bold mb-4">Product Name</h1>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
            libero. Sed cursus ante dapibus diam.
          </p>
          <p className="text-xl font-semibold mb-6">$199.99</p>
          <button className="btn-primary w-full">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
