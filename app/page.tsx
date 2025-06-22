import Image from "next/image";
 

 async function getFormulas() {
  const res = await fetch('http://localhost:3000/api/formulas');
  return res.json();
 }
 

 export interface Formula {
  id: number;
  name: string;
  formula: string;
 }
 

 export default async function Home() {
  const formulas: Formula[] = await getFormulas();
 

  return (
   <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
     <Image
      className="dark:invert"
      src="/next.svg"
      alt="Next.js logo"
      width={180}
      height={38}
      priority
     />
     <h1>Physics Formulas</h1>
     <input type="text" placeholder="Search formulas..." />
     <FormulaList />
 

     <div className="flex gap-4 items-center flex-col sm:flex-row">
      <a
       className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
       target="_blank"
       rel="noopener noreferrer"
      >
       <Image
        className="dark:invert"
        src="/vercel.svg"
        alt="Vercel logomark"
        width={20}
        height={20}
       />
       Deploy now
      </a>
      <a
       className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
       target="_blank"
       rel="noopener noreferrer"
      >
       Read our docs
      </a>
     </div>
    </main>
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
     <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
     >
      <Image
       aria-hidden
       src="/file.svg"
       alt="File icon"
       width={16}
       height={16}
      />
      Learn
     </a>
     <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
       target="_blank"
       rel="noopener noreferrer"
      >
       <Image
        aria-hidden
        src="/window.svg"
        alt="Window icon"
        width={16}
        height={16}
       />
       Examples
      </a>
      <a
       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
       target="_blank"
       rel="noopener noreferrer"
      >
       <Image
        aria-hidden
        src="/globe.svg"
        alt="Globe icon"
        width={16}
        height={16}
       />
       Go to nextjs.org →
      </a>
     </footer>
    </div>
   );
 }
 

 function ListItemLink({ formula }: { formula: string }) {
  return (
   <li>
    <a href={`/api/formulas/[formula]`}>{formula}</a>
   </li>
  );
 }
 

 function FormulaList() {
  return (
   <ul>
    <ListItemLink formula="acceleration" />
   </ul>
  );
 }
