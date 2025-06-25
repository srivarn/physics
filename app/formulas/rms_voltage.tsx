
"use client";

import Calculator from '../components/Calculator';

export default function RMSVoltagePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>RMS Voltage</h1>
      <p>RMS Voltage is a physics concept.</p>
      <p>Formula: Vrms = Vpeak / √2</p>
      <Calculator />
    </div>
  );
}
