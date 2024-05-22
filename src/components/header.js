import Link from 'next/link';

export default function Header() {
    return (
      <div className="logo">
        <h1 className="flex items-center justify-center text-3xl space-mono-bold">
        <Link href="/">Youri van der Meulen</Link>
        </h1>
      </div>
    );
  }