
"use client";

import Calculator from '../components/Calculator';

export default function ResistancePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Resistance</h1>
      <p>Resistance is a physics concept.</p>
      <p>Formula: R = V/I</p>
      <Calculator />
    </div>
  );
}
