"use client";

import Calculator from '../components/Calculator';
import { FormulaList } from '../components/FormulaList';
import { useEffect, useState } from 'react';

export default function FormulasPage() {
  const [formulas, setFormulas] = useState<{ name: string; formula: string; id: number }[]>([]);

  useEffect(() => {
    async function getFormulas() {
      const response = await fetch('/api/formulas');
      const data = await response.json();
      setFormulas(data);
    }

    getFormulas();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1>Formulas</h1>
      <FormulaList formulas={formulas.map(formula => ({ name: formula.name, path: `/formulas/${formula.name.toLowerCase().replace(/ /g, '_')}` }))} />
      <Calculator />
    </div>
  );
}
