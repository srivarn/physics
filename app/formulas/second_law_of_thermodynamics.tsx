
"use client";

import Calculator from '../components/Calculator';

export default function SecondLawofThermodynamicsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Second Law of Thermodynamics</h1>
      <p>Second Law of Thermodynamics is a physics concept.</p>
      <p>Formula: ΔS ≥ 0</p>
      <Calculator />
    </div>
  );
}
