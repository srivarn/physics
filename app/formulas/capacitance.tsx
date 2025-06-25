
"use client";

import Calculator from '../components/Calculator';

export default function CapacitancePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Capacitance</h1>
      <p>Capacitance is a physics concept.</p>
      <p>Formula: C = Q/V</p>
      <Calculator />
    </div>
  );
}
