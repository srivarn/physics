
"use client";

import Calculator from '../components/Calculator';

export default function HeatTransferPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Heat Transfer</h1>
      <p>Heat Transfer is a physics concept.</p>
      <p>Formula: Q = kA(ΔT/d)</p>
      <Calculator />
    </div>
  );
}
