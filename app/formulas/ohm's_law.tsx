
"use client";

import Calculator from '../components/Calculator';

export default function Ohm'sLawPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Ohm's Law</h1>
      <p>Ohm's Law is a physics concept.</p>
      <p>Formula: V = IR</p>
      <Calculator />
    </div>
  );
}
