import { shoe8 } from "../assets/images";
import Button from "../components/Button";

function SuperQuality() {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="flex flex-col items-start justify-center">
        <h2 className="  mb-5 font-palanquin text-4xl font-extrabold tracking-wide max-sm:text-3xl max-sm:leading-8">
          We Provide You <span className="text-coral-red">Super</span>
          <br />
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="text-slate-gray ">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="my-6 text-slate-gray ">
          {" "}
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <Button>View details</Button>
      </div>
      <div className="max-sm:mt-3 max-sm:p-3">
        <img
          src={shoe8}
          width={570}
          height={522}
          alt="shoe8"
          className="object-contain"
        />
      </div>
    </section>
  );
}

export default SuperQuality;
