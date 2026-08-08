export default function HeroSection() {
  return (
    <section className="relative bg-emerald-950 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="bg-emerald-800 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            সরাসরি বাগান থেকে সংগৃহীত
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mt-4 leading-tight">
            সেরা মানের চা পাতা, <br />
            <span className="text-amber-400">পাইকারি ও খুচরা</span> সুলভ মূল্যে।
          </h1>
          <p className="mt-4 text-emerald-200 text-base sm:text-lg">
            আমরা প্রদান করি সেরা লিকার ও খাঁটি সুবাস যুক্ত চা পাতা। পাইকারি চা দোকানদার, রেস্তোরাঁ এবং বাড়ি ব্যবহারের জন্য উপযুক্ত।
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#products"
              className="bg-amber-500 hover:bg-amber-600 text-emerald-950 px-6 py-3 rounded-lg font-bold transition shadow-lg"
            >
              চা পাতার তালিকা দেখুন
            </a>
            <a
              href="#wholesale"
              className="border border-emerald-400 text-emerald-100 hover:bg-emerald-900 px-6 py-3 rounded-lg font-semibold transition"
            >
              বাল্ক অর্ডার ইনকোয়ারি
            </a>
          </div>
        </div>
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-emerald-800">
          <img
            src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=1000"
            alt="Tea Garden Leaf"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
