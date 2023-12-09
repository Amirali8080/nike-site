import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

function PopularProducts() {
  return (
    <section className="max-container max-sm:mt-7">
      <div className="flex flex-col  gap-3">
        <h1 className="mt-10 font-palanquin text-2xl font-semibold sm:text-3xl">
          Our <span className="text-coral-red">Popular</span> Products{" "}
        </h1>
        <p className="max-w-md font-montserrat text-slate-gray">
          Exprience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design and value.
        </p>
      </div>
      <div className="mt-12 flex flex-wrap justify-start gap-10 max-sm:flex-col">
        {products.map((product) => (
          <PopularProductCard key={product.imgURL} product={product} />
        ))}
      </div>
    </section>
  );
}

export default PopularProducts;
