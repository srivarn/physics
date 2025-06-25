
"use client";

import Calculator from '../components/Calculator';

export default function VelocityPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Velocity</h1>
      <p>Velocity is a physics concept.</p>
      <p>Formula: v = d / t</p>
      <Calculator />
    </div>
  );
}
