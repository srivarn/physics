import { NextResponse } from 'next/server';

const formulas = [
  { id: 1, name: 'Velocity', formula: 'v = d / t' },
  { id: 2, name: 'Acceleration', formula: 'a = (v_f - v_i) / t' },
  { id: 3, name: 'Force', formula: 'F = m * a' },
];

export async function GET() {
  return NextResponse.json(formulas);
}
