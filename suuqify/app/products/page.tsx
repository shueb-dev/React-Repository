import Link from "next/link";
import React from "react";
interface Products {
  id: number;
  title: string;
  body: string;
  price: number;
  image: ImageBitmap;
}
async function Products() {
  const url = "https://fakestoreapi.com/products";
  const response = await fetch(url);
  const products = await response.json();

  // console.log(products);
  return (
    <div className="text-center text-3xl font-bold text-green-800 p-4 ">
      <h1>Products</h1>
      <div className="grid grid-cols-3 gap-6 p-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((products: Products) => (
          <div
            className="card bg-amber-200 w-96   shadow-sm text-base position:relative"
            key={products.id}
          >
            <figure>
              <img src={products.image} width={"200 px"} height={150} />
            </figure>
            <div className="card-body text-base-100 ">
              <Link href={`/products/${products.id}`} className="card-title">
                {products.title}
              </Link>
              <p>$ {products.price}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-success position: absolute  bottom-2 text-xl ">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
