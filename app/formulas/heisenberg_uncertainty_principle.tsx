
"use client";

import Calculator from '../components/Calculator';

export default function HeisenbergUncertaintyPrinciplePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Heisenberg Uncertainty Principle</h1>
      <p>Heisenberg Uncertainty Principle is a physics concept.</p>
      <p>Formula: ΔxΔp ≥ ħ/2</p>
      <Calculator />
    </div>
  );
}
