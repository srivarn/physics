
"use client";

import Calculator from '../components/Calculator';

export default function FirstLawofThermodynamicsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>First Law of Thermodynamics</h1>
      <p>First Law of Thermodynamics is a physics concept.</p>
      <p>Formula: ΔU = Q - W</p>
      <Calculator />
    </div>
  );
}
