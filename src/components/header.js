import Link from 'next/link';

export default function Header() {
    return (
      <div className="mt-10 mb-4 ml-4 flex  w-full">
        <h1 className="text-4xl font-medium">
          <Link href="/"></Link>
        </h1>
      </div>
    );
  }