
"use client";

import Calculator from '../components/Calculator';

export default function PhotoelectricEffectPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Photoelectric Effect</h1>
      <p>Photoelectric Effect is a physics concept.</p>
      <p>Formula: E = hf - Φ</p>
      <Calculator />
    </div>
  );
}
