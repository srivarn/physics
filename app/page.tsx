import FormulaList from './components/FormulaList';
import Calculator from './components/Calculator';
import SearchBar from './components/SearchBar';

export interface Formula {
  name: string;
  formula: string;
}

async function getFormulas() {
  const res = await fetch('http://localhost:3000/api/formulas');
  const formulas = await res.json();
  return formulas;
}

export default async function Home() {
  const formulas = await getFormulas();
  return (
    <div className="container">
      <h1>Physics Formulas</h1>
      <SearchBar />
      <FormulaList formulas={formulas} searchQuery="" />
      <Calculator />
    </div>
  );
}
