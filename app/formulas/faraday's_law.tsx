
"use client";

import Calculator from '../components/Calculator';

export default function Faraday'sLawPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Faraday's Law</h1>
      <p>Faraday's Law is a physics concept.</p>
      <p>Formula: ε = -N dΦ/dt</p>
      <Calculator />
    </div>
  );
}
