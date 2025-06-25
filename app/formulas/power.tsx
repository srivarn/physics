
"use client";

import Calculator from '../components/Calculator';

export default function PowerPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Power</h1>
      <p>Power is a physics concept.</p>
      <p>Formula: P = W/t</p>
      <Calculator />
    </div>
  );
}
