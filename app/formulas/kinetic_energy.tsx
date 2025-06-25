
"use client";

import Calculator from '../components/Calculator';

export default function KineticEnergyPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Kinetic Energy</h1>
      <p>Kinetic Energy is a physics concept.</p>
      <p>Formula: KE = 1/2 mv^2</p>
      <Calculator />
    </div>
  );
}
