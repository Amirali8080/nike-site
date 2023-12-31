import { star } from "../assets/icons";

function ReviewCard({ imgURL, feedback, rating, customerName }) {
  return (
    <div className="flex flex-col items-center justify-center">
      {" "}
      <h3 className="my-3 text-center font-palanquin text-3xl font-bold">
        {customerName}
      </h3>
      <img
        src={imgURL}
        alt="customer"
        className="h-[120px] w-[120px] rounded-full object-cover"
      />
      <p className="info-text mt-6 max-w-sm text-center">{feedback}</p>
      <div className="mt-3 flex items-center justify-center gap-2.5">
        <img
          src={star}
          width={24}
          height={24}
          alt="rating star"
          className="m-0 object-contain"
        />
        <p className="font-montserrat text-xl text-slate-gray">({rating})</p>
      </div>
    </div>
  );
}

export default ReviewCard;
