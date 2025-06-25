
"use client";

import Calculator from '../components/Calculator';

export default function MomentumPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Momentum</h1>
      <p>Momentum is a physics concept.</p>
      <p>Formula: p = mv</p>
      <Calculator />
    </div>
  );
}
