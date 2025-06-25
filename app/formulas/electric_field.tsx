
"use client";

import Calculator from '../components/Calculator';

export default function ElectricFieldPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Electric Field</h1>
      <p>Electric Field is a physics concept.</p>
      <p>Formula: E = F/q</p>
      <Calculator />
    </div>
  );
}
