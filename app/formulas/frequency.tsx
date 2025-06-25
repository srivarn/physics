
"use client";

import Calculator from '../components/Calculator';

export default function FrequencyPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Frequency</h1>
      <p>Frequency is a physics concept.</p>
      <p>Formula: f = 1/T</p>
      <Calculator />
    </div>
  );
}
