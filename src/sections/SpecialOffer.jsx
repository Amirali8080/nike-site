import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

function SpecialOffer() {
  return (
    <section className="max-container flex items-center gap-10 max-lg:flex-col-reverse max-sm:gap-6 ">
      <div>
        <img
          src={offer}
          alt="offer"
          className=" h-[640px] w-[700px] object-contain"
        />
      </div>
      <div className=" flex max-w-sm flex-col items-start justify-center">
        <h2 className="  mb-5 font-palanquin text-4xl font-extrabold tracking-wide max-sm:text-3xl max-sm:leading-8">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="info-text mt-4">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text my-6">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex gap-5">
          <Button icon={arrowRight}>Shop now</Button>
          <Button
            borderColor="border-gray-500"
            textColor="text-slate-gray"
            backgroundColor="transparent"
          >
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;
