
"use client";

import Calculator from '../components/Calculator';

export default function GravityPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Gravity</h1>
      <p>Gravity is a physics concept.</p>
      <p>Formula: F = Gm1m2/r^2</p>
      <Calculator />
    </div>
  );
}
