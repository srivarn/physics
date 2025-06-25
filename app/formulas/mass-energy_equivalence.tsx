
"use client";

import Calculator from '../components/Calculator';

export default function Mass-EnergyEquivalencePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Mass-Energy Equivalence</h1>
      <p>Mass-Energy Equivalence is a physics concept.</p>
      <p>Formula: E = mc^2</p>
      <Calculator />
    </div>
  );
}
