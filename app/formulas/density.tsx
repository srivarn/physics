
"use client";

import Calculator from '../components/Calculator';

export default function DensityPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Density</h1>
      <p>Density is a physics concept.</p>
      <p>Formula: ρ = m/V</p>
      <Calculator />
    </div>
  );
}
