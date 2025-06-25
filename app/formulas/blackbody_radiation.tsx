
"use client";

import Calculator from '../components/Calculator';

export default function BlackbodyRadiationPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Blackbody Radiation</h1>
      <p>Blackbody Radiation is a physics concept.</p>
      <p>Formula: E = σT^4</p>
      <Calculator />
    </div>
  );
}
