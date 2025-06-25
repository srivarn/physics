
"use client";

import Calculator from '../components/Calculator';

export default function InductancePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Inductance</h1>
      <p>Inductance is a physics concept.</p>
      <p>Formula: L = NΦ/I</p>
      <Calculator />
    </div>
  );
}
