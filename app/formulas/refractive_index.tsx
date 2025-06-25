
"use client";

import Calculator from '../components/Calculator';

export default function RefractiveIndexPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Refractive Index</h1>
      <p>Refractive Index is a physics concept.</p>
      <p>Formula: n = c/v</p>
      <Calculator />
    </div>
  );
}
