
"use client";

import Calculator from '../components/Calculator';

export default function Coulomb'sLawPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Coulomb's Law</h1>
      <p>Coulomb's Law is a physics concept.</p>
      <p>Formula: F = k q1q2/r^2</p>
      <Calculator />
    </div>
  );
}
