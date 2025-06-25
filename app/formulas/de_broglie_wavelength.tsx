
"use client";

import Calculator from '../components/Calculator';

export default function DeBroglieWavelengthPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>De Broglie Wavelength</h1>
      <p>De Broglie Wavelength is a physics concept.</p>
      <p>Formula: λ = h/p</p>
      <Calculator />
    </div>
  );
}
