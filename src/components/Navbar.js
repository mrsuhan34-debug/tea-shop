import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-emerald-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-wide text-amber-400">
          রয়েল টি হাউস 🍃
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="/" className="hover:text-amber-400 transition">হোম</Link>
          <Link href="#products" className="hover:text-amber-400 transition">চা কালেকশন</Link>
          <Link href="#wholesale" className="hover:text-amber-400 transition">পাইকারি ইনকোয়ারি</Link>
          <Link href="#about" className="hover:text-amber-400 transition">আমাদের কথা</Link>
        </div>
        <a
          href="https://wa.me/8801700000000"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-amber-500 hover:bg-amber-600 text-emerald-950 px-4 py-2 rounded-full font-semibold text-sm transition shadow"
        >
          সরাসরি কল / WhatsApp
        </a>
      </div>
    </nav>
  );
}
