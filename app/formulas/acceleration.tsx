
"use client";

import Calculator from '../components/Calculator';

export default function AccelerationPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Acceleration</h1>
      <p>Acceleration is a physics concept.</p>
      <p>Formula: a = (v_f - v_i) / t</p>
      <Calculator />
    </div>
  );
}
