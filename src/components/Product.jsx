function Product({ product }) {
  return (
    <div className="lg:w-72 w-full border-gray-300 border-2 rounded-xl relative">
      <div className="p-4">
        <div className="block relative h-72 rounded overflow-hidden w-full">
          <img
            alt="..."
            className="w-full h-full"
            src={product.image}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-black text-xs tracking-widest title-font mb-1">
            {product.category}
          </h3>
          <h2 className="text-black title-font text-lg font-medium">
            {product.title}
          </h2>
          <p className="mt-1 text-2xl font-semibold text-blue-700">${product.price}</p>
        </div>
      </div>
      <div className="bg-red-400 w-full absolute bottom-0 left-0 h-10">
        <button className="w-full h-full bg-blue-500 text-2xl font-semibold text-white">Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
