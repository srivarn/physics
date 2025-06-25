
"use client";

import Calculator from '../components/Calculator';

export default function ElectricPotentialPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Electric Potential</h1>
      <p>Electric Potential is a physics concept.</p>
      <p>Formula: V = kQ/r</p>
      <Calculator />
    </div>
  );
}
