
"use client";

import Calculator from '../components/Calculator';

export default function WaveSpeedPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Wave Speed</h1>
      <p>Wave Speed is a physics concept.</p>
      <p>Formula: v = fλ</p>
      <Calculator />
    </div>
  );
}
