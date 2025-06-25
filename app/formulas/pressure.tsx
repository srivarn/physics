
"use client";

import Calculator from '../components/Calculator';

export default function PressurePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Pressure</h1>
      <p>Pressure is a physics concept.</p>
      <p>Formula: P = F/A</p>
      <Calculator />
    </div>
  );
}
