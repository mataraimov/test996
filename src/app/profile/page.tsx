// app/profile/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Login</h1>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="w-full p-2 border rounded-md" />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded-md" />
        <button type="submit" className="btn-primary w-full mt-6">
          Login
        </button>
      </form>
      <p className="text-center mt-4">
        Dont have an account?
        <Link href="/register">
          <span className="text-blue-500">Register here</span>
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
