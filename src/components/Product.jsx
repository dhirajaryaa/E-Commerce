function Product({ product }) {
  return (
    <div className="lg:w-72 w-full border-gray-300 border-2 rounded-xl">
      <div className="p-4">
        <div className="block relative h-52  rounded overflow-hidden w-full">
          <img
            alt="..."
            className="w-full h-full object-contain"
            src={product.image}
          />
        </div>
        <div className="my-4">
          <h3 className="text-red-600 text-xs tracking-widest title-font mb-1">
            {(product.category).toUpperCase()}
          </h3>
          <h2 className="text-black title-font text-lg font-medium">
            {product.title}
          </h2>
          <p className="mt-1 text-2xl font-semibold text-blue-700">
            ${product.price}
          </p>
        </div>
        <div className="flex items-center justify-evenly">
          <button className="py-2 px-4 h-10 bg-rose-500 text-base font-semibold text-white rounded-xl hover:bg-rose-600 shadow-xl shadow-indigo-300/40">
            Add to Cart
          </button>
          <button className="py-2 px-4 h-10 bg-green-500 text-base font-semibold text-white rounded-xl hover:bg-green-600 shadow-xl shadow-indigo-300/40">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
