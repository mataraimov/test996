'use client';

import React from 'react';
import Link from 'next/link';

const CompanyHomePage = () => {
  const query = new URLSearchParams(window.location.search);
  const companyName = query.get('name') || 'Unknown Company';
  const companyDescription = query.get('description') || 'No description available.';
  const error = query.get('error') || '';

  return (
    <div className="container mx-auto p-6">
      {error && (
        <div className="alert alert-error mb-6">
          <p>{error}</p>
        </div>
      )}
      <h1 className="text-4xl font-bold mb-8">{companyName}</h1>
      <p className="text-gray-700 mb-6">{companyDescription}</p>
      <Link href={`/${companyName}/catalog`}>
        <span className="btn-primary">Explore Our Catalog</span>
      </Link>
    </div>
  );
};

export default CompanyHomePage;
