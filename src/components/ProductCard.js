export default function ProductCard({ product }) {
  const whatsappMessage = encodeURIComponent(
    `হ্যালো, আমি "${product.name}" (${product.weight}) প্রডাক্টটি অর্ডার করতে চাই। মূল্য: ৳${product.price}। বিবরণ জানাবেন।`
  );

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col justify-between hover:shadow-lg transition">
      <div>
        <div className="relative h-48 w-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-3 right-3 bg-emerald-900 text-white text-xs px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
          <p className="text-gray-600 text-sm mt-2">{product.description}</p>
          
          <div className="mt-4 pt-3 border-t border-gray-100 space-y-1">
            <div className="text-sm text-gray-500">
              প্যাক সাইজ: <span className="font-semibold text-gray-800">{product.weight}</span>
            </div>
            <div className="text-lg font-bold text-emerald-700">
              ৳ {product.price} <span className="text-xs font-normal text-gray-500">(খুচরা)</span>
            </div>
            <div className="text-xs bg-amber-50 text-amber-800 p-2 rounded mt-2">
              <strong>পাইকারি দর:</strong> ৳ {product.wholesalePrice}
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 pt-0">
        <a
          href={`https://wa.me/8801700000000?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition"
        >
          <span>WhatsApp-এ অর্ডার করুন</span>
        </a>
      </div>
    </div>
  );
}
