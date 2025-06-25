"use client";

import Calculator from '../components/Calculator';

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>About</h1>
      <p>Information about this physics formulas website.</p>
      <Calculator />
    </div>
  );
}
