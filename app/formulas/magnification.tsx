
"use client";

import Calculator from '../components/Calculator';

export default function MagnificationPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Magnification</h1>
      <p>Magnification is a physics concept.</p>
      <p>Formula: M = hi/ho</p>
      <Calculator />
    </div>
  );
}
