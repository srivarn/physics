
"use client";

import Calculator from '../components/Calculator';

export default function IdealGasLawPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Ideal Gas Law</h1>
      <p>Ideal Gas Law is a physics concept.</p>
      <p>Formula: PV = nRT</p>
      <Calculator />
    </div>
  );
}
