import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/project01">Project 1</Link>
      <Link href="/project02/">Project 2</Link>
      <Link href="/kerntaak01">Kerntaak 1</Link>
      <Link href="/kerntaak02/">Kerntaak 2</Link>
      <Link href="/about/">About Me</Link>
    </nav>
  );
}