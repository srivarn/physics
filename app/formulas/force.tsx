
"use client";

import Calculator from '../components/Calculator';

export default function ForcePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Force</h1>
      <p>Force is a physics concept.</p>
      <p>Formula: F = m * a</p>
      <Calculator />
    </div>
  );
}
