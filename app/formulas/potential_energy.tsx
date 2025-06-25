
"use client";

import Calculator from '../components/Calculator';

export default function PotentialEnergyPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Potential Energy</h1>
      <p>Potential Energy is a physics concept.</p>
      <p>Formula: PE = mgh</p>
      <Calculator />
    </div>
  );
}
