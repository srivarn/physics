
"use client";

import Calculator from '../components/Calculator';

export default function ThermalEnergyPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Thermal Energy</h1>
      <p>Thermal Energy is a physics concept.</p>
      <p>Formula: Q = mcΔT</p>
      <Calculator />
    </div>
  );
}
