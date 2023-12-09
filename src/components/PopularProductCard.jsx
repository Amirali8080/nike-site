import { star } from "../assets/icons";

function PopularProductCard({ product }) {
  return (
    <div className="font-palanquin">
      <img className="max-w-[250px]" src={product.imgURL} />

      <span className="mb-2 mt-4 flex gap-2 font-montserrat text-slate-gray">
        <img src={star} />({product.rating})
      </span>
      <h3 className="my-2 text-lg font-semibold">{product.name}</h3>
      <span className="font-montserrat text-xl font-semibold text-coral-red">
        {product.price}
      </span>
    </div>
  );
}

export default PopularProductCard;
