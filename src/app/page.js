import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />
      <HeroSection />

      {/* Product List Section */}
      <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">আমাদের জনপ্রিয় চা পাতা</h2>
          <p className="text-gray-600 mt-2">আপনার প্রয়োজন অনুযায়ী খুচরা বা পাইকারি অর্ডারের সুবিধা</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Wholesale Inquiry Section */}
      <section id="wholesale" className="bg-emerald-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">পাইকারি ও বাল্ক অর্ডারের জন্য যোগাযোগ করুন</h2>
          <p className="mt-4 text-emerald-200">
            ৫০ কেজি বা তার বেশি চা পাতার জন্য আকর্ষণীয় ছাড় পেতে আমাদের সাথে সরাসরি যোগাযোগ করুন বা আপনার রিকোয়েস্ট পাঠান।
          </p>
          <div className="mt-8 bg-white text-gray-800 p-6 sm:p-8 rounded-xl shadow-lg text-left">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">আপনার নাম</label>
                <input type="text" className="w-full border rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-600" placeholder="মোঃ রহিম" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">ফোন নম্বর</label>
                <input type="tel" className="w-full border rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-600" placeholder="01700000000" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1">প্রয়োজনীয় পরিমাণ (কেজি/বস্তা)</label>
                <input type="text" className="w-full border rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-600" placeholder="যেমন: ১০০ কেজি ডাস্ট চা" />
              </div>
              <div className="sm:col-span-2">
                <button type="button" className="w-full bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold py-3 rounded-lg transition">
                  ইনকোয়ারি সাবমিট করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-400 py-8 text-center text-sm border-t border-emerald-900">
        © 2026 রয়েল টি হাউস। সর্বস্বত্ব সংরক্ষিত।
      </footer>
    </main>
  );
}
