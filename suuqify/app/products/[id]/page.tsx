import { promises } from "dns";
import React from "react";
type props = {
  params: Promise<{ id: string }>;
};

interface Products {
  id: number;
  title: string;
  body: string;
  price: number;
  image: ImageBitmap;
}

async function ProductDetails(props: props) {
  const id = (await props.params).id;
  const url = "https://fakestoreapi.com/products/" + id;
  const response = await fetch(url);
  const product = await response.json();
  return (
    <div
      className="card bg-amber-300 w-96  shadow-sm text-base m-10"
      key={product.id}
    >
      <figure>
        <img src={product.image} width={200} height={200} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>$ {product.price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-success text-xl">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
