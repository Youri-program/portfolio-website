import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1>Youri van der Meulen</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/project01">Project01</Link>
      <Link href="/project02/">Project02</Link>
    </nav>
  );
}