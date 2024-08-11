// app/faq/page.tsx
'use client';

import React from 'react';

const FAQPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">Question 1</h2>
          <p className="text-gray-700">Answer to question 1...</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Question 2</h2>
          <p className="text-gray-700">Answer to question 2...</p>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
