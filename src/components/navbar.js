import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/project01">Project01</Link>
      <Link href="/project02/">Project02</Link>
    </nav>
  );
}