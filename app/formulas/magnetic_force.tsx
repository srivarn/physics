
"use client";

import Calculator from '../components/Calculator';

export default function MagneticForcePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Magnetic Force</h1>
      <p>Magnetic Force is a physics concept.</p>
      <p>Formula: F = qvBsinθ</p>
      <Calculator />
    </div>
  );
}
