
"use client";

import Calculator from '../components/Calculator';

export default function Snell'sLawPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Snell's Law</h1>
      <p>Snell's Law is a physics concept.</p>
      <p>Formula: n1sinθ1 = n2sinθ2</p>
      <Calculator />
    </div>
  );
}
