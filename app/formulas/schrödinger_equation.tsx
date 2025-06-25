
"use client";

import Calculator from '../components/Calculator';

export default function SchrödingerEquationPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Schrödinger Equation</h1>
      <p>Schrödinger Equation is a physics concept.</p>
      <p>Formula: iħ(∂ψ/∂t) = Hψ</p>
      <Calculator />
    </div>
  );
}
