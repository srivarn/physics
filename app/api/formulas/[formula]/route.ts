export async function GET(request: Request, { params }: { params: { formula: string } }) {
  const formula = params.formula;
  return Response.json({ formula });
 }
