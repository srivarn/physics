
"use client";

import Calculator from '../components/Calculator';

export default function EntropyPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Entropy</h1>
      <p>Entropy is a physics concept.</p>
      <p>Formula: ΔS = Q/T</p>
      <Calculator />
    </div>
  );
}
