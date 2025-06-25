import Link from 'next/link';
 

function ListItemLink({ formula }: { formula: string }) {
  const href = `/formulas/${formula.toLowerCase().replace(/ /g, '_')}`;
  return (
    <div>
      <Link href={href}>{formula}</Link>
    </div>
  );
}
 

 export default ListItemLink;
