
"use client";

import Calculator from '../components/Calculator';

export default function MagneticFieldPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Magnetic Field</h1>
      <p>Magnetic Field is a physics concept.</p>
      <p>Formula: B = μ0I/2πr</p>
      <Calculator />
    </div>
  );
}
