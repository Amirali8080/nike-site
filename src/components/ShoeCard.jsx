function ShoeCard({ imageUrl, changeBigShoeImage, bigShoeImage }) {
  function handleClick() {
    if (bigShoeImage !== imageUrl.bigShoe) changeBigShoeImage(imageUrl.bigShoe);
  }
  return (
    <div
      className={` rounded-xl border-2 ${
        bigShoeImage === imageUrl.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div
        className="flex  h-24 w-24 items-center justify-center 
      rounded-lg bg-card  bg-cover bg-center p-4 sm:h-36 sm:w-36"
      >
        <img
          src={imageUrl.thumbnail}
          alt="shoe collecion"
          width={124}
          height={100}
          className=" object-contain"
        />
      </div>
    </div>
  );
}

export default ShoeCard;
