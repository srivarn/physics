
"use client";

import Calculator from '../components/Calculator';

export default function ImpulsePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Impulse</h1>
      <p>Impulse is a physics concept.</p>
      <p>Formula: J = FΔt</p>
      <Calculator />
    </div>
  );
}
