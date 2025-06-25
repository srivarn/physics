
"use client";

import Calculator from '../components/Calculator';

export default function ThirdLawofThermodynamicsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Third Law of Thermodynamics</h1>
      <p>Third Law of Thermodynamics is a physics concept.</p>
      <p>Formula: S = 0 at 0 K</p>
      <Calculator />
    </div>
  );
}
