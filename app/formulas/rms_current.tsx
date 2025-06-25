
"use client";

import Calculator from '../components/Calculator';

export default function RMSCurrentPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>RMS Current</h1>
      <p>RMS Current is a physics concept.</p>
      <p>Formula: Irms = Ipeak / √2</p>
      <Calculator />
    </div>
  );
}
