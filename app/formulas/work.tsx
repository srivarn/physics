
"use client";

import Calculator from '../components/Calculator';

export default function WorkPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Work</h1>
      <p>Work is a physics concept.</p>
      <p>Formula: W = Fd</p>
      <Calculator />
    </div>
  );
}
