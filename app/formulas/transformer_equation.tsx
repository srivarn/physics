
"use client";

import Calculator from '../components/Calculator';

export default function TransformerEquationPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Transformer Equation</h1>
      <p>Transformer Equation is a physics concept.</p>
      <p>Formula: Vp/Vs = Np/Ns</p>
      <Calculator />
    </div>
  );
}
