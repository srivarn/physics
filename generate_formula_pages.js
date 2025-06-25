const fs = require('fs');

const formulas = [
  { id: 1, name: 'Velocity', formula: 'v = d / t' },
  { id: 2, name: 'Acceleration', formula: 'a = (v_f - v_i) / t' },
  { id: 3, name: 'Force', formula: 'F = m * a' },
  { id: 4, name: 'Ohm\'s Law', formula: 'V = IR' },
  { id: 5, name: 'Gravity', formula: 'F = Gm1m2/r^2' },
  { id: 6, name: 'Potential Energy', formula: 'PE = mgh' },
  { id: 7, name: 'Kinetic Energy', formula: 'KE = 1/2 mv^2' },
  { id: 8, name: 'Power', formula: 'P = W/t' },
  { id: 9, name: 'Momentum', formula: 'p = mv' },
  { id: 10, name: 'Impulse', formula: 'J = FΔt' },
  { id: 11, name: 'Work', formula: 'W = Fd' },
  { id: 12, name: 'Torque', formula: 'τ = rFsinθ' },
  { id: 13, name: 'Pressure', formula: 'P = F/A' },
  { id: 14, name: 'Density', formula: 'ρ = m/V' },
  { id: 15, name: 'Frequency', formula: 'f = 1/T' },
  { id: 16, name: 'Wave Speed', formula: 'v = fλ' },
  { id: 17, name: 'Refractive Index', formula: 'n = c/v' },
  { id: 18, name: 'Snell\'s Law', formula: 'n1sinθ1 = n2sinθ2' },
  { id: 19, name: 'Magnification', formula: 'M = hi/ho' },
  { id: 20, name: 'Coulomb\'s Law', formula: 'F = k q1q2/r^2' },
  { id: 21, name: 'Electric Field', formula: 'E = F/q' },
  { id: 22, name: 'Electric Potential', formula: 'V = kQ/r' },
  { id: 23, name: 'Capacitance', formula: 'C = Q/V' },
  { id: 24, name: 'Resistance', formula: 'R = V/I' },
  { id: 25, name: 'Magnetic Force', formula: 'F = qvBsinθ' },
  { id: 26, name: 'Magnetic Field', formula: 'B = μ0I/2πr' },
  { id: 27, name: 'Faraday\'s Law', formula: 'ε = -N dΦ/dt' },
  { id: 28, name: 'Inductance', formula: 'L = NΦ/I' },
  { id: 29, name: 'RMS Voltage', formula: 'Vrms = Vpeak / √2' },
  { id: 30, name: 'RMS Current', formula: 'Irms = Ipeak / √2' },
  { id: 31, name: 'Transformer Equation', formula: 'Vp/Vs = Np/Ns' },
  { id: 32, name: 'Ideal Gas Law', formula: 'PV = nRT' },
  { id: 33, name: 'Thermal Energy', formula: 'Q = mcΔT' },
  { id: 34, name: 'Heat Transfer', formula: 'Q = kA(ΔT/d)' },
  { id: 35, name: 'Entropy', formula: 'ΔS = Q/T' },
  { id: 36, name: 'First Law of Thermodynamics', formula: 'ΔU = Q - W' },
  { id: 37, name: 'Second Law of Thermodynamics', formula: 'ΔS ≥ 0' },
  { id: 38, name: 'Third Law of Thermodynamics', formula: 'S = 0 at 0 K' },
  { id: 39, name: 'Blackbody Radiation', formula: 'E = σT^4' },
  { id: 40, name: 'Photoelectric Effect', formula: 'E = hf - Φ' },
  { id: 41, name: 'Heisenberg Uncertainty Principle', formula: 'ΔxΔp ≥ ħ/2' },
  { id: 42, name: 'Schrödinger Equation', formula: 'iħ(∂ψ/∂t) = Hψ' },
  { id: 43, name: 'Mass-Energy Equivalence', formula: 'E = mc^2' },
  { id: 44, name: 'De Broglie Wavelength', formula: 'λ = h/p' },
];

formulas.forEach(formula => {
  const fileName = formula.name.toLowerCase().replace(/ /g, '_') + '.tsx';
  const filePath = `app/formulas/${fileName}`;

  const content = `
"use client";

import Calculator from '../components/Calculator';

export default function ${formula.name.replace(/ /g, '')}Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>${formula.name}</h1>
      <p>${formula.name} is a physics concept.</p>
      <p>Formula: ${formula.formula}</p>
      <Calculator />
    </div>
  );
}
`;

  fs.writeFileSync(filePath, content);
  console.log(`Created ${filePath}`);
});
