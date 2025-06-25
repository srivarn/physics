
"use client";

import Calculator from '../components/Calculator';

export default function TorquePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Torque</h1>
      <p>Torque is a physics concept.</p>
      <p>Formula: τ = rFsinθ</p>
      <Calculator />
    </div>
  );
}
